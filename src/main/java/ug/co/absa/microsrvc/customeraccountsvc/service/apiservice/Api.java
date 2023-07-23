package ug.co.absa.microsrvc.customeraccountsvc.service.apiservice;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Path;
import ug.co.absa.microsrvc.customeraccountsvc.domain.inquiry.amol.response.AmolCustomerInfoResponse;
import ug.co.absa.microsrvc.customeraccountsvc.domain.inquiry.thirdparty.request.ValidationInBoundRequest;

public interface Api {
    @GET("savings-account/savings-account-fulfillment/account-information/retrieval?accountNumber={accountNumber}")
    Call<AmolCustomerInfoResponse> getCustomerAccountDetails(@Path("customerAccount") String accountNumber);

}

