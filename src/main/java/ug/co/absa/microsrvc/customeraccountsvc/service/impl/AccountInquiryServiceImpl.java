package ug.co.absa.microsrvc.customeraccountsvc.service.impl;

import java.io.IOException;


import org.apache.kafka.common.errors.ApiException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import ug.co.absa.microsrvc.customeraccountsvc.domain.inquiry.amol.response.AmolCustomerInfoResponse;
import ug.co.absa.microsrvc.customeraccountsvc.domain.inquiry.thirdparty.request.ValidationInBoundRequest;
import ug.co.absa.microsrvc.customeraccountsvc.domain.inquiry.thirdparty.response.AccountInquiryOutBountRes;
import ug.co.absa.microsrvc.customeraccountsvc.service.IAccountInquiryService;
import ug.co.absa.microsrvc.customeraccountsvc.service.apiservice.ApiService;
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
			accountInqUtilValidator.validateInputRequest(validationInBoundRequest);
			respEntity = accountInquiry(validationInBoundRequest.getAccountNumber());
		} catch (ApiException ex) {
			LOGGER.error(METHOD_NAME, validationInBoundRequest.getAccountNumber(), "Api Exception Occured- error", ex.getMessage());
			LOGGER.debug(METHOD_NAME, validationInBoundRequest.getTransactionId(), "Api Exception Occured- debug", ex);
			throw ex;
		}
		return respEntity;

	}

    @Override
    public AmolCustomerInfoResponse validateInputRequest(String accountNumber) throws IOException {
        final var METHOD_NAME = "validateInputRequest";
        LOGGER.info(METHOD_NAME, accountNumber, "Inside ServiceImpl", AccountInquiryConstants.EMPTY);
        final AmolCustomerInfoResponse[] amolCustomerInfoResponse = new AmolCustomerInfoResponse[1];
       Call<AmolCustomerInfoResponse>  call = ApiService.getValidationInBoundRequest(accountNumber);
              call.enqueue(new Callback<AmolCustomerInfoResponse>() {
           @Override
           public void onResponse(Call<AmolCustomerInfoResponse> call, Response<AmolCustomerInfoResponse> response) {
               LOGGER.info(METHOD_NAME, accountNumber, "Response Received", AccountInquiryConstants.EMPTY);
               amolCustomerInfoResponse[0] = response.body();
               
           }

           @Override
           public void onFailure(Call<AmolCustomerInfoResponse> call, Throwable throwable) {
                        LOGGER.error(METHOD_NAME, accountNumber, "Api Exception Occured- error", throwable.getMessage());
               LOGGER.debug(METHOD_NAME, accountNumber, "Api Exception Occured- debug", throwable);
               throw new ApiException( "Api Exception Occured- debug", throwable);
           }
       });

        return amolCustomerInfoResponse[0];
    }






/*
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
*/

    private ResponseEntity<AccountInquiryOutBountRes> accountInquiry(String accountNumber) throws IOException {
        final var METHOD_NAME = "accountInquiry";


            this.validateInputRequest(accountNumber);

        } catch (
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
