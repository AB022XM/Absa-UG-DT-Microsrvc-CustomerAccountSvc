
package ug.co.absa.microsrvc.customeraccountsvc.domain.inquiry;

import javax.annotation.Generated;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "adHocStatementFlag",
    "additionalAddressFlag",
    "atmFacilityFlag",
    "checkReorderThresholdNumber",
    "deferredStmtGenerationDayOfMonth",
    "generateRateChangeIntimationFlag",
    "groupBonusInteresFlag",
    "holdMailFlag",
    "interestWaiverFlag",
    "internetBankingAccessFlag",
    "inwardDirectDebitAuthorizationFlag",
    "jointAccountFlag",
    "leadDaysIntimation",
    "mailAddressControlFlag",
    "mobileFacilityFlag",
    "numberOfCheckWithdrawals",
    "numberOfPastDueChecks",
    "numberOfStatementCopies",
    "overdraftLimitAmount",
    "pointOfSaleFacilityFlag",
    "standingInstructionFlag",
    "sweepoutInstructionFlag"
})
@Generated("jsonschema2pojo")
public class ArrangementOption {

    @JsonProperty("adHocStatementFlag")
    public Boolean adHocStatementFlag;
    @JsonProperty("additionalAddressFlag")
    public Boolean additionalAddressFlag;
    @JsonProperty("atmFacilityFlag")
    public Boolean atmFacilityFlag;
    @JsonProperty("checkReorderThresholdNumber")
    public Integer checkReorderThresholdNumber;
    @JsonProperty("deferredStmtGenerationDayOfMonth")
    public Integer deferredStmtGenerationDayOfMonth;
    @JsonProperty("generateRateChangeIntimationFlag")
    public Boolean generateRateChangeIntimationFlag;
    @JsonProperty("groupBonusInteresFlag")
    public String groupBonusInteresFlag;
    @JsonProperty("holdMailFlag")
    public String holdMailFlag;
    @JsonProperty("interestWaiverFlag")
    public Boolean interestWaiverFlag;
    @JsonProperty("internetBankingAccessFlag")
    public Boolean internetBankingAccessFlag;
    @JsonProperty("inwardDirectDebitAuthorizationFlag")
    public Boolean inwardDirectDebitAuthorizationFlag;
    @JsonProperty("jointAccountFlag")
    public Boolean jointAccountFlag;
    @JsonProperty("leadDaysIntimation")
    public Integer leadDaysIntimation;
    @JsonProperty("mailAddressControlFlag")
    public String mailAddressControlFlag;
    @JsonProperty("mobileFacilityFlag")
    public Boolean mobileFacilityFlag;
    @JsonProperty("numberOfCheckWithdrawals")
    public Integer numberOfCheckWithdrawals;
    @JsonProperty("numberOfPastDueChecks")
    public Integer numberOfPastDueChecks;
    @JsonProperty("numberOfStatementCopies")
    public Integer numberOfStatementCopies;
    @JsonProperty("overdraftLimitAmount")
    public Float overdraftLimitAmount;
    @JsonProperty("pointOfSaleFacilityFlag")
    public Boolean pointOfSaleFacilityFlag;
    @JsonProperty("standingInstructionFlag")
    public Boolean standingInstructionFlag;
    @JsonProperty("sweepoutInstructionFlag")
    public Boolean sweepoutInstructionFlag;

}
