
package ug.co.absa.microsrvc.customeraccountsvc.domain.inquiry.amol;

import javax.annotation.Generated;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import ug.co.absa.microsrvc.customeraccountsvc.domain.inquiry.Data;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "code",
    "data",
    "message",
    "sourceInfo",
    "status"
})
@Generated("jsonschema2pojo")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AccountInquiryOutBountRes {

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
