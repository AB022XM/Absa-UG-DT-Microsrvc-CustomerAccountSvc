
package ug.co.absa.microsrvc.customeraccountsvc.domain.inquiry;

import java.util.List;
import javax.annotation.Generated;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.Valid;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "accountCurrency",
    "accountNumber",
    "accountStatus",
    "accountTitle",
    "advanceAgainstUnclearedFunds",
    "arrangementOption",
    "availableBalance",
    "branchCode",
    "branchName",
    "branchShortName",
    "creditsMonthTillDateAmount",
    "currentBalance",
    "customerNumber",
    "customerReference",
    "dateType",
    "debitsMonthTillDateAmount",
    "debitsYearTillDateAmount",
    "interestAccrualType",
    "issuedInventoryPropertyType",
    "languageCode",
    "lineNumber",
    "minimumRequiredBalanceAmount",
    "minimumRequiredTradingBalanceAmount",
    "mtdCreditsCount",
    "mtdDebitsCount",
    "netAvailableBalanceForWithdrawal",
    "netBalanceAmount",
    "passbookLifecycleStatusCode",
    "periodicAverageBalanceAmount",
    "previousDayClosingBookBalance",
    "productCode",
    "productName",
    "restrictionOptionSetting",
    "staffFlag",
    "sweepinAmountOnLien",
    "taxReference",
    "totalCASAHoldAmount",
    "totalUnclearFundAmount",
    "ytdCreditLastAmount",
    "ytdCreditsCount",
    "ytdDebitsCount",
    "ytdDebitsLastAmount"
})
@Generated("jsonschema2pojo")
public class Data {

    @JsonProperty("accountCurrency")
    public String accountCurrency;
    @JsonProperty("accountNumber")
    public String accountNumber;
    @JsonProperty("accountStatus")
    @Valid
    public AccountStatus accountStatus;
    @JsonProperty("accountTitle")
    public String accountTitle;
    @JsonProperty("advanceAgainstUnclearedFunds")
    public Float advanceAgainstUnclearedFunds;
    @JsonProperty("arrangementOption")
    @Valid
    public ArrangementOption arrangementOption;
    @JsonProperty("availableBalance")
    public Integer availableBalance;
    @JsonProperty("branchCode")
    public String branchCode;
    @JsonProperty("branchName")
    public String branchName;
    @JsonProperty("branchShortName")
    public String branchShortName;
    @JsonProperty("creditsMonthTillDateAmount")
    public Float creditsMonthTillDateAmount;
    @JsonProperty("currentBalance")
    public Integer currentBalance;
    @JsonProperty("customerNumber")
    public String customerNumber;
    @JsonProperty("customerReference")
    @Valid
    public CustomerReference customerReference;
    @JsonProperty("dateType")
    @Valid
    public List<DateType> dateType;
    @JsonProperty("debitsMonthTillDateAmount")
    public Float debitsMonthTillDateAmount;
    @JsonProperty("debitsYearTillDateAmount")
    public Float debitsYearTillDateAmount;
    @JsonProperty("interestAccrualType")
    @Valid
    public List<InterestAccrualType> interestAccrualType;
    @JsonProperty("issuedInventoryPropertyType")
    @Valid
    public List<IssuedInventoryPropertyType> issuedInventoryPropertyType;
    @JsonProperty("languageCode")
    public String languageCode;
    @JsonProperty("lineNumber")
    public Integer lineNumber;
    @JsonProperty("minimumRequiredBalanceAmount")
    public Integer minimumRequiredBalanceAmount;
    @JsonProperty("minimumRequiredTradingBalanceAmount")
    public Float minimumRequiredTradingBalanceAmount;
    @JsonProperty("mtdCreditsCount")
    public Integer mtdCreditsCount;
    @JsonProperty("mtdDebitsCount")
    public Integer mtdDebitsCount;
    @JsonProperty("netAvailableBalanceForWithdrawal")
    public Integer netAvailableBalanceForWithdrawal;
    @JsonProperty("netBalanceAmount")
    public Integer netBalanceAmount;
    @JsonProperty("passbookLifecycleStatusCode")
    public String passbookLifecycleStatusCode;
    @JsonProperty("periodicAverageBalanceAmount")
    public Float periodicAverageBalanceAmount;
    @JsonProperty("previousDayClosingBookBalance")
    public Float previousDayClosingBookBalance;
    @JsonProperty("productCode")
    public Integer productCode;
    @JsonProperty("productName")
    public String productName;
    @JsonProperty("restrictionOptionSetting")
    @Valid
    public RestrictionOptionSetting restrictionOptionSetting;
    @JsonProperty("staffFlag")
    public Boolean staffFlag;
    @JsonProperty("sweepinAmountOnLien")
    public Integer sweepinAmountOnLien;
    @JsonProperty("taxReference")
    @Valid
    public TaxReference taxReference;
    @JsonProperty("totalCASAHoldAmount")
    public Float totalCASAHoldAmount;
    @JsonProperty("totalUnclearFundAmount")
    public Integer totalUnclearFundAmount;
    @JsonProperty("ytdCreditLastAmount")
    public Float ytdCreditLastAmount;
    @JsonProperty("ytdCreditsCount")
    public Integer ytdCreditsCount;
    @JsonProperty("ytdDebitsCount")
    public Integer ytdDebitsCount;
    @JsonProperty("ytdDebitsLastAmount")
    public Float ytdDebitsLastAmount;

}
