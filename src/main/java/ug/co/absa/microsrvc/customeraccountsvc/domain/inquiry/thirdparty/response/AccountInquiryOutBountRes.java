
package ug.co.absa.microsrvc.customeraccountsvc.domain.inquiry.thirdparty.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import ug.co.absa.microsrvc.customeraccountsvc.domain.inquiry.thirdparty.response.Data;

import javax.annotation.Generated;

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
    public Data data;


    @JsonProperty("message")
    public String message;


    @JsonProperty("sourceInfo")
    public Object sourceInfo;

    @JsonProperty("status")
    public String status;


    public void setData(Data data) {
        this.data = data;
    }

    public Data getData() {
        return data;
    }
}
