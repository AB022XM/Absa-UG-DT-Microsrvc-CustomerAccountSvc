package ug.co.absa.microsrvc.customeraccountsvc.service.apiservice;

import java.util.List;

import io.reactivex.Observable;
import retrofit2.http.GET;
import ug.co.absa.microsrvc.customeraccountsvc.domain.inquiry.amol.AccountInquiryOutBountRes;

public interface Api {
    @GET("savings-account/savings-account-fulfillment/account-information/retrieval?accountNumber={accountNumber}")
    Observable<AccountInquiryOutBountRes> getCustomerAccountDetails(String accountNumber);
}

