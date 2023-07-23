
package ug.co.absa.microsrvc.customeraccountsvc.domain.inquiry;

import javax.annotation.Generated;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "accountLifecycleStatusCode",
    "accrualStatusCode",
    "casaAccountStatus",
    "minorAccountStatusCode"
})
@Generated("jsonschema2pojo")
public class AccountStatus {

    @JsonProperty("accountLifecycleStatusCode")
    public String accountLifecycleStatusCode;
    @JsonProperty("accrualStatusCode")
    public String accrualStatusCode;
    @JsonProperty("casaAccountStatus")
    public String casaAccountStatus;
    @JsonProperty("minorAccountStatusCode")
    public String minorAccountStatusCode;

}
