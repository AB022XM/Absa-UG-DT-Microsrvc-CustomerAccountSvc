
package ug.co.absa.microsrvc.customeraccountsvc.domain.inquiry;

import javax.annotation.Generated;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "fullName"
})
@Generated("jsonschema2pojo")
public class CustomerReference {

    @JsonProperty("fullName")
    public String fullName;

}
