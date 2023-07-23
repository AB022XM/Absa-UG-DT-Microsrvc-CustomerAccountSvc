
package ug.co.absa.microsrvc.customeraccountsvc.domain.inquiry.amol.response;

import javax.annotation.Generated;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "type"
})
@Generated("jsonschema2pojo")
public class IssuedInventoryPropertyType {

    @JsonProperty("type")
    public String type;

}
