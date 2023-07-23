package ug.co.absa.microsrvc.customeraccountsvc.service.apiservice;

import retrofit2.Call;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
import ug.co.absa.microsrvc.customeraccountsvc.domain.inquiry.amol.response.AmolCustomerInfoResponse;
import ug.co.absa.microsrvc.customeraccountsvc.domain.inquiry.thirdparty.response.AccountInquiryOutBountRes;

public class ApiService {

    public static  Api api;

    public ApiService() {
        String BASE_URL = "(https://domain-api-uat.nprd-amol.intra.absa.co.za:443/v2/";
        Retrofit retrofit = new Retrofit.Builder()
            .baseUrl("BASE_URL")
            .addConverterFactory(GsonConverterFactory.create())
           // .addCallAdapterFactory(RxJavaCallAdapterFactory.create())
            .build();

        api = retrofit.create(Api.class);
    }

     public static  Call< AmolCustomerInfoResponse> getValidationInBoundRequest(String accountNumber){
      return    api.getCustomerAccountDetails(accountNumber);

     }


}
