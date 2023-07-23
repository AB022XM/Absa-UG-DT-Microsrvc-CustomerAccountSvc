package ug.co.absa.microsrvc.customeraccountsvc.service;


import org.springframework.http.ResponseEntity;
import ug.co.absa.microsrvc.customeraccountsvc.domain.inquiry.amol.response.AmolCustomerInfoResponse;
import ug.co.absa.microsrvc.customeraccountsvc.domain.inquiry.thirdparty.request.ValidationInBoundRequest;

import java.io.IOException;

public interface IAccountInquiryService {

	ResponseEntity<AccountInquiryOutBountRes> accountInquiryService(ValidationInBoundRequest validationInBoundRequest);

    AmolCustomerInfoResponse validateInputRequest(String accountNumber) throws IOException;
}
