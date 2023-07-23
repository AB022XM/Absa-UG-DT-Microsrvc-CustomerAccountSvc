package ug.co.absa.microsrvc.customeraccountsvc.domain.inquiry.amol.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import ug.co.absa.microsrvc.customeraccountsvc.domain.inquiry.amol.response.AccountStatus;

@JsonInclude(JsonInclude.Include.NON_NULL)

@Getter @Setter @AllArgsConstructor @NoArgsConstructor
public class AmolCustomerInfoResponse {


    @JsonProperty("code")
    public String code;
    @JsonProperty("data")
    @Valid
    public Data data;
    @JsonProperty("message")
    public String message;
    @JsonProperty("sourceInfo")
    public Object sourceInfo;
    @JsonProperty("status")
    public String status;
}
