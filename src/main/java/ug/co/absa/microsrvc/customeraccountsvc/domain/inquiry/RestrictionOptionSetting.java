
package ug.co.absa.microsrvc.customeraccountsvc.domain.inquiry;

import javax.annotation.Generated;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "restrictedAccountFlag"
})
@Generated("jsonschema2pojo")
public class RestrictionOptionSetting {

    @JsonProperty("restrictedAccountFlag")
    public Boolean restrictedAccountFlag;

}
