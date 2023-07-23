package ug.co.absa.microsrvc.customeraccountsvc.domain.inquiry.amol;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.Valid;
import ug.co.absa.microsrvc.customeraccountsvc.domain.inquiry.AccountStatus;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class CustomerData {

    @JsonProperty("accountCurrency")
    public String accountCurrency;
    @JsonProperty("accountNumber")
    public String accountNumber;
    @JsonProperty("accountStatus")
    @Valid
    public AccountStatus accountStatus;
    @JsonProperty("accountTitle")
    public String accountTitle;
}
