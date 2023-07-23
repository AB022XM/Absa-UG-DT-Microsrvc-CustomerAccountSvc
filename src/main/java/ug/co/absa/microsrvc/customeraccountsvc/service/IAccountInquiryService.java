package ug.co.absa.microsrvc.customeraccountsvc.service;


import org.springframework.http.ResponseEntity;
import ug.co.absa.microsrvc.customeraccountsvc.domain.ValidationInBoundRequest;
import ug.co.absa.microsrvc.customeraccountsvc.domain.inquiry.amol.AccountInquiryOutBountRes;

public interface IAccountInquiryService {

	ResponseEntity<AccountInquiryOutBountRes> accountInquiryService(ValidationInBoundRequest validationInBoundRequest);

}
