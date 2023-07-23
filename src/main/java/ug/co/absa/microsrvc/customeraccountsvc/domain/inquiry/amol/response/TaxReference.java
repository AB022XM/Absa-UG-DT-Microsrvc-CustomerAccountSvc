
package ug.co.absa.microsrvc.customeraccountsvc.domain.inquiry.amol.response;

import javax.annotation.Generated;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "taxCode1",
    "taxCode2",
    "tdsExemptionLimitAmount1",
    "tdsExemptionLimitAmount2",
    "tdsFlag"
})
@Generated("jsonschema2pojo")
public class TaxReference {

    @JsonProperty("taxCode1")
    public Integer taxCode1;
    @JsonProperty("taxCode2")
    public Integer taxCode2;
    @JsonProperty("tdsExemptionLimitAmount1")
    public Float tdsExemptionLimitAmount1;
    @JsonProperty("tdsExemptionLimitAmount2")
    public Float tdsExemptionLimitAmount2;
    @JsonProperty("tdsFlag")
    public Boolean tdsFlag;

}
