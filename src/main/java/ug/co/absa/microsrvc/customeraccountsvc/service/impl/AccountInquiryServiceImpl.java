package ug.co.absa.microsrvc.customeraccountsvc.service.impl;

import java.io.IOException;


import jakarta.json.bind.Jsonb;
import jakarta.json.bind.JsonbBuilder;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.util.EntityUtils;
import org.apache.kafka.common.errors.ApiException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import ug.co.absa.microsrvc.customeraccountsvc.domain.ValidationInBoundRequest;
import ug.co.absa.microsrvc.customeraccountsvc.domain.inquiry.amol.AccountInquiryOutBountRes;
import ug.co.absa.microsrvc.customeraccountsvc.service.IAccountInquiryService;
import ug.co.absa.microsrvc.customeraccountsvc.util.AccountInquiryConstants;
import ug.co.absa.microsrvc.customeraccountsvc.util.AccountInquiryUtil;
import ug.co.absa.microsrvc.customeraccountsvc.util.AccountInquiryUtilValidator;
import ug.co.absa.microsrvc.customeraccountsvc.util.HttpConnectionUtil;

import javax.inject.Inject;


public class AccountInquiryServiceImpl implements IAccountInquiryService {
	private static final Logger LOGGER = LoggerFactory.getLogger(AccountInquiryServiceImpl.class);

	@Inject
	private HttpConnectionUtil httpConnectionUtil;

	@Inject
	private AccountInquiryUtil accountInqUtil;

	@Inject
	private AccountInquiryUtilValidator accountInqUtilValidator;

	@Inject
	private ValidationInBoundRequest accountInqMapper;

	@Override
	public ResponseEntity<AccountInquiryOutBountRes> accountInquiryService(ValidationInBoundRequest validationInBoundRequest) {
		final var METHOD_NAME = "accountInquiryService";
		ResponseEntity<AccountInquiryOutBountRes> respEntity = null;

		try {
			LOGGER.info(METHOD_NAME, validationInBoundRequest.getAccountNumber(), "Inside ServiceImpl", AccountInquiryConstants.EMPTY);
			accountInqUtilValidator.validateInputRequest(accountInquiryReqWrapper);
			respEntity = accountInquiry(accountInquiryReqWrapper);
		} catch (ApiException ex) {
			LOGGER.error(METHOD_NAME, consumerUniqueReferenceId, "Api Exception Occured- error", ex.getErrorMessage());
			LOGGER.debug(METHOD_NAME, consumerUniqueReferenceId, "Api Exception Occured- debug", ex);
			throw ex;
		} catch (Exception ex) {
			LOGGER.error(METHOD_NAME, consumerUniqueReferenceId, "Exception Occured- error", ex.getMessage());
			LOGGER.debug(METHOD_NAME, consumerUniqueReferenceId, "Exception Occured- debug", ex);
			throw new ApiResponseException(AccountInquiryConstants.INTERNAL_ERROR_CODE, AccountInquiryConstants.INTERNAL_ERROR_DESC);
		}
		return respEntity;

	}


	private ResponseEntity<AccountInquiryOutBountRes> accountInquiry(String accountNumber) throws IOException {
		final var METHOD_NAME = "accountInquiry";

		CloseableHttpClient client = httpConnectionUtil.getCloseableHttpClient();
		ResponseEntity<AccountInquiryOutBountRes> respEntity = null;
		HttpPost post = new HttpPost(accountInqUtil.getConfigStringValue(AccountInquiryConstants.ACCOUNT_INQUIRY_URL));
		try (Jsonb jsnob = JsonbBuilder.create()) {
			AccountInquiryFVReq accountInquiryFVReq = accountInqMapper.getFVRequest(accountInquiryReqWrapper);
			String json =  jsnob.toJson(accountInquiryFVReq);
			post.setHeader(AccountInquiryConstants.APP_ID, accountInqUtil.getConfigStringValue("app.id"));
			post.setHeader(AccountInquiryConstants.APP_KEY, accountInqUtil.getConfigStringValue("app.key"));
			post.setHeader(AccountInquiryConstants.APP_CODE, accountInqUtil.getConfigStringValue("app.code"));
			post.setEntity(new StringEntity(json, ContentType.create("application/json")));
			CloseableHttpResponse response = client.execute(post);
			HttpEntity httpEntity = response.getEntity();
			statusCodeFv = response.getStatusLine().getStatusCode();
			LOGGER.info(METHOD_NAME, consumerUniqueReferenceId, "Status Code Received" +statusCodeFv, AccountInquiryConstants.EMPTY);
			result = EntityUtils.toString(httpEntity);
			respEntity = accountInqMapper.getResponse(accountInquiryReqWrapper, result, statusCodeFv);

		} catch (ApiException ex) {
			LOGGER.error(METHOD_NAME, consumerUniqueReferenceId, "Api Exception Occured- error", ex.getErrorMessage());
			LOGGER.debug(METHOD_NAME, consumerUniqueReferenceId, "Api Exception Occured- debug", ex);
			throw ex;
		} catch (Exception e) {
			LOGGER.error(METHOD_NAME, consumerUniqueReferenceId, "Exception Occured - error", e.getMessage());
			LOGGER.debug(METHOD_NAME, consumerUniqueReferenceId, "Exception Occured - debug", e);
			throw new ApiResponseException(AccountInquiryConstants.INTERNAL_ERROR_CODE,
					AccountInquiryConstants.INTERNAL_ERROR_DESC);
		}

		return respEntity;
	}

}
