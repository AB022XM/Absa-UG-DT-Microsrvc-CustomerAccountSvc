package ug.co.absa.microsrvc.customeraccountsvc.util;

import jakarta.inject.Inject;
import jakarta.validation.Validator;
import org.eclipse.microprofile.config.Config;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ug.co.absa.microsrvc.customeraccountsvc.domain.inquiry.thirdparty.request.ValidationInBoundRequest;


public class AccountInquiryUtilValidator {

	@Inject
	private Validator validator;

	@Inject
	Config config;

	private static final Logger LOGGER = LoggerFactory.getLogger(AccountInquiryUtilValidator.class);


    public void validateInputRequest(ValidationInBoundRequest validationInBoundRequest) {

       if (validationInBoundRequest.getAccountNumber().isEmpty() ||
       validationInBoundRequest.getTransactionId().isEmpty()){

          throw new IllegalArgumentException(AccountInquiryConstants.EMPTY + "Account Number and trnsaction id can not be null " +
              AccountInquiryConstants.TRANSACTION_ID);
       }

		LOGGER.info(AccountInquiryConstants.VALIDATE_INPUT_REQUEST,"Empty or null input request",
            AccountInquiryConstants.VALIDATING_REQUEST, AccountInquiryConstants.EMPTY);



	}

	private String getPropertyValue(String confkey) {
		try {
			return config.getValue(confkey, String.class);
		} catch (Exception e) {
			LOGGER.error(AccountInquiryConstants.GET_PROPERTY_VALUE, AccountInquiryConstants.EMPTY,
					AccountInquiryConstants.EXCEPTION_WHILE_READING_PROPERTY_FOR_THE_KEY + confkey,
					e.getMessage());
		}
		return AccountInquiryConstants.EMPTY;
	}

}
