package ug.co.absa.microsrvc.customeraccountsvc.util;

import java.util.HashSet;
import java.util.Set;

import javax.inject.Inject;


import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validator;
import org.eclipse.microprofile.config.Config;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ug.co.absa.microsrvc.customeraccountsvc.domain.ValidationInBoundRequest;

import  ug.co.absa.microsrvc.customeraccountsvc.util.*;



public class AccountInquiryUtilValidator {

	@Inject
	private Validator validator;

	@Inject
	Config config;

	private static final Logger LOGGER = LoggerFactory.getLogger(AccountInquiryUtilValidator.class);

	public void validateInputRequest(ValidationInBoundRequest validationInBoundRequest) {

	String consumerUniqueRefId = AccountInquiryConstants.EMPTY;
		if (StringUtil.isStringNotNullAndNotEmpty(
				accountInquiryReqWrapper.getApiRequestHeader().getConsumerUniqueReferenceId())) {
			consumerUniqueRefId = accountInquiryReqWrapper.getApiRequestHeader().getConsumerUniqueReferenceId();
		}
		LOGGER.info(AccountInquiryConstants.VALIDATE_INPUT_REQUEST, consumerUniqueRefId,
				AccountInquiryConstants.VALIDATING_REQUEST, AccountInquiryConstants.EMPTY);
		Set<String> errorSet = new HashSet<>();
		Set<String> annoBeansValErrSet = validatedAnnotedBeans(accountInquiryReqWrapper);
		errorSet.addAll(annoBeansValErrSet);
		if (!errorSet.isEmpty()) {
			String errorMessage = String.join(AccountInquiryConstants.COMMA_DELIMITER, errorSet);
			LOGGER.error(AccountInquiryConstants.VALIDATE_INPUT_REQUEST, consumerUniqueRefId,
					AccountInquiryConstants.VALIDATION_FAILED, errorMessage);
			throw new ApiRequestException(AccountInquiryConstants.BAD_REQUEST_CODE, errorMessage);
		}
	}

	private Set<String> validatedAnnotedBeans(AccountInquiryReqWrapper accountInquiryReqWrapper) {
		Set<String> annoBeansValErrSet = new HashSet<>();
		Set<ConstraintViolation<Object>> violations = validator.validate(accountInquiryReqWrapper);
		for (ConstraintViolation<Object> error : violations) {
			String customErroMsg = getPropertyValue(error.getMessageTemplate());
			if (StringUtil.isStringNullOrEmpty(customErroMsg)) {
				customErroMsg = error.getMessage();
			}
			annoBeansValErrSet.add(customErroMsg);
		}
		return annoBeansValErrSet;
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
