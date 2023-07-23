package ug.co.absa.microsrvc.customeraccountsvc.domain.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.ZonedDateTime;
import java.util.HashMap;
import java.util.List;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import ug.co.absa.microsrvc.customeraccountsvc.domain.baseclass.AbstractAuditingEntity;
import ug.co.absa.microsrvc.customeraccountsvc.domain.enumeration.AccountLifecycleStatusCode;
import ug.co.absa.microsrvc.customeraccountsvc.domain.enumeration.AccountStatus;
import ug.co.absa.microsrvc.customeraccountsvc.domain.enumeration.CASAAccountStatus;
import ug.co.absa.microsrvc.customeraccountsvc.domain.enumeration.GroupBonusInteresFlag;
import ug.co.absa.microsrvc.customeraccountsvc.domain.enumeration.HoldMailFlag;
import ug.co.absa.microsrvc.customeraccountsvc.domain.enumeration.InterestWaiverFlag;
import ug.co.absa.microsrvc.customeraccountsvc.domain.enumeration.LanguageCode;
import ug.co.absa.microsrvc.customeraccountsvc.domain.enumeration.MinorAccountStatusCode;
import ug.co.absa.microsrvc.customeraccountsvc.domain.inquiry.amol.response.AmolCustomerInfoResponse;
import ug.co.absa.microsrvc.customeraccountsvc.domain.inquiry.amol.response.CustomerReference;
import ug.co.absa.microsrvc.customeraccountsvc.domain.inquiry.amol.response.Data;
import ug.co.absa.microsrvc.customeraccountsvc.domain.inquiry.amol.response.DateType;

/**
 * A AbsaCustomer.
 */
@Entity
@Table(name = "absa_customer")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@org.springframework.data.elasticsearch.annotations.Document(indexName = "absacustomer")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@SuppressWarnings("common-java:DuplicatedBlocks")
public class AbsaCustomer extends AbstractAuditingEntity<AbsaCustomer> implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    @Column(name = "id")
    private Long id;

    @Column(name = "account_currency")
    private String accountCurrency;

    @Column(name = "account_number")
    private String accountNumber;

    @Enumerated(EnumType.STRING)
    @Column(name = "account_status")
    private AccountStatus accountStatus;

    @Enumerated(EnumType.STRING)
    @Column(name = "account_lifecycle_status_code")
    private AccountLifecycleStatusCode accountLifecycleStatusCode;

    @Column(name = "accrual_status_code")
    private String accrualStatusCode;

    @Enumerated(EnumType.STRING)
    @Column(name = "casa_account_status")
    private CASAAccountStatus casaAccountStatus;

    @Enumerated(EnumType.STRING)
    @Column(name = "minor_account_status_code")
    private MinorAccountStatusCode minorAccountStatusCode;

    @Column(name = "account_title")
    private String accountTitle;

    @Column(name = "advance_against_uncleared_funds", precision = 21, scale = 2)
    private BigDecimal advanceAgainstUnclearedFunds;

    @Column(name = "ad_hoc_statement_flag")
    private Boolean adHocStatementFlag;

    @Column(name = "additional_address_flag")
    private Boolean additionalAddressFlag;

    @Column(name = "atm_facility_flag")
    private Boolean atmFacilityFlag;

    @Column(name = "check_reorder_threshold_number", precision = 21, scale = 2)
    private BigDecimal checkReorderThresholdNumber;

    @Column(name = "deferred_stmt_generation_day_of_month", precision = 21, scale = 2)
    private BigDecimal deferredStmtGenerationDayOfMonth;

    @Column(name = "generate_rate_change_intimation_flag")
    private Boolean generateRateChangeIntimationFlag;

    @Enumerated(EnumType.STRING)
    @Column(name = "group_bonus_interes_flag")
    private GroupBonusInteresFlag groupBonusInteresFlag;

    @Enumerated(EnumType.STRING)
    @Column(name = "hold_mail_flag")
    private HoldMailFlag holdMailFlag;

    @Enumerated(EnumType.STRING)
    @Column(name = "interest_waiver_flag")
    private InterestWaiverFlag interestWaiverFlag;

    @Column(name = "internet_banking_access_flag")
    private Boolean internetBankingAccessFlag;

    @Column(name = "inward_direct_debit_authorization_flag")
    private Boolean inwardDirectDebitAuthorizationFlag;

    @Column(name = "joint_account_flag")
    private Boolean jointAccountFlag;

    @Column(name = "lead_days_intimation")
    private Boolean leadDaysIntimation;

    @Column(name = "mail_address_control_flag")
    private Boolean mailAddressControlFlag;

    @Column(name = "mobile_facility_flag")
    private Boolean mobileFacilityFlag;

    @Column(name = "number_of_check_withdrawals")
    private Integer numberOfCheckWithdrawals;

    @Column(name = "number_of_past_due_checks")
    private Integer numberOfPastDueChecks;

    @Column(name = "number_of_statement_copies")
    private Integer numberOfStatementCopies;

    @Column(name = "overdraft_limit_amount")
    private Integer overdraftLimitAmount;

    @Column(name = "point_of_sale_facility_flag")
    private Boolean pointOfSaleFacilityFlag;

    @Column(name = "standing_instruction_flag")
    private Boolean standingInstructionFlag;

    @Column(name = "sweepout_instruction_flag")
    private Boolean sweepoutInstructionFlag;

    @Column(name = "available_balance", precision = 21, scale = 2)
    private BigDecimal availableBalance;

    @Column(name = "branch_code")
    private Integer branchCode;

    @Column(name = "branch_name")
    private String branchName;

    @Column(name = "branch_short_name")
    private String branchShortName;

    @Column(name = "credits_month_till_date_amount")
    private Integer creditsMonthTillDateAmount;

    @Column(name = "current_balance")
    private Integer currentBalance;

    @Column(name = "customer_number")
    private String customerNumber;

    @Column(name = "is_absa_customer")
    private Boolean isAbsaCustomer;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "account_opening_date")
    private ZonedDateTime accountOpeningDate;

    @Column(name = "statement_period_start_date")
    private ZonedDateTime statementPeriodStartDate;

    @Column(name = "statement_period_end_date")
    private ZonedDateTime statementPeriodEndDate;

    @Column(name = "debits_last_date")
    private ZonedDateTime debitsLastDate;

    @Column(name = "credit_last_date")
    private ZonedDateTime creditLastDate;

    @Column(name = "debits_month_till_date_amount")
    private ZonedDateTime debitsMonthTillDateAmount;

    @Column(name = "debits_year_till_date_amount", precision = 21, scale = 2)
    private BigDecimal debitsYearTillDateAmount;

    @Column(name = "credit_interest_accrued_amount", precision = 21, scale = 2)
    private BigDecimal creditInterestAccruedAmount;

    @Column(name = "debit_interest_accrued_amount", precision = 21, scale = 2)
    private BigDecimal debitInterestAccruedAmount;

    @Column(name = "adjusted_credit_interest_accrued", precision = 21, scale = 2)
    private BigDecimal adjustedCreditInterestAccrued;

    @Column(name = "adjusted_debit_interest_accrued", precision = 21, scale = 2)
    private BigDecimal adjustedDebitInterestAccrued;

    @Column(name = "projected_tax_on_accrued_interest_amount", precision = 21, scale = 2)
    private BigDecimal projectedTaxOnAccruedInterestAmount;

    @Column(name = "interest_accrued_in_current_financial_year")
    private Integer interestAccruedInCurrentFinancialYear;

    @Column(name = "issued_inventory_property_type")
    private String issuedInventoryPropertyType;

    @Column(name = "last_issued_check_number")
    private Integer lastIssuedCheckNumber;

    @Enumerated(EnumType.STRING)
    @Column(name = "language_code")
    private LanguageCode languageCode;

    @Column(name = "line_number")
    private Integer lineNumber;

    @Column(name = "minimum_required_balance_amount", precision = 21, scale = 2)
    private BigDecimal minimumRequiredBalanceAmount;

    @Column(name = "minimum_required_trading_balance_amount", precision = 21, scale = 2)
    private BigDecimal minimumRequiredTradingBalanceAmount;

    @Column(name = "mtd_credits_count")
    private Integer mtdCreditsCount;

    @Column(name = "mtd_debits_count")
    private Integer mtdDebitsCount;

    @Column(name = "net_available_balance_for_withdrawal")
    private Integer netAvailableBalanceForWithdrawal;

    @Column(name = "net_balance_amount")
    private Integer netBalanceAmount;

    @Column(name = "passbook_lifecycle_status_code")
    private Integer passbookLifecycleStatusCode;

    @Column(name = "periodic_average_balance_amount", precision = 21, scale = 2)
    private BigDecimal periodicAverageBalanceAmount;

    @Column(name = "previous_day_closing_book_balance", precision = 21, scale = 2)
    private BigDecimal previousDayClosingBookBalance;

    @Column(name = "product_code")
    private Integer productCode;

    @Column(name = "product_name")
    private String productName;

    @Column(name = "restricted_account_flag")
    private Boolean restrictedAccountFlag;

    @Column(name = "staff_flag")
    private Boolean staffFlag;

    @Column(name = "sweepin_amount_on_lien")
    private Integer sweepinAmountOnLien;

    @Column(name = "tax_code_1")
    private Integer taxCode1;

    @Column(name = "tax_code_2")
    private Integer taxCode2;

    @Column(name = "tds_exemption_limit_amount_1")
    private Integer tdsExemptionLimitAmount1;

    @Column(name = "tds_exemption_limit_amount_2")
    private Integer tdsExemptionLimitAmount2;

    @Column(name = "total_casa_hold_amount", precision = 21, scale = 2)
    private BigDecimal totalCASAHoldAmount;

    @Column(name = "total_unclear_fund_amount", precision = 21, scale = 2)
    private BigDecimal totalUnclearFundAmount;

    @Column(name = "ytd_credit_last_amount")
    private Integer ytdCreditLastAmount;

    @Column(name = "ytd_credits_count")
    private Integer ytdCreditsCount;

    @Column(name = "ytd_debits_count")
    private Integer ytdDebitsCount;

    @Column(name = "ytd_debits_last_amount")
    private Integer ytdDebitsLastAmount;

    @Column(name = "message")
    private String message;

    @Column(name = "source_info")
    private String sourceInfo;

    @Column(name = "status")
    private String status;

    @Column(name = "cust_free_text_field_1")
    private String custFreeTextField1;

    @Column(name = "cust_free_text_field_2")
    private String custFreeTextField2;

    @Column(name = "cust_free_text_field_3")
    private String custFreeTextField3;

    @Column(name = "cust_free_text_field_4")
    private String custFreeTextField4;

    @Column(name = "cust_free_text_field_5")
    private String custFreeTextField5;

    @Column(name = "cust_free_text_field_6")
    private String custFreeTextField6;

    @Column(name = "cust_free_text_field_7")
    private String custFreeTextField7;

    @Column(name = "cust_free_text_field_8")
    private String custFreeTextField8;

    @Column(name = "cust_free_text_field_9")
    private String custFreeTextField9;

    @Column(name = "cust_free_text_field_10")
    private String custFreeTextField10;

    @Column(name = "cust_free_text_field_11")
    private String custFreeTextField11;

    @Column(name = "cust_free_text_field_12")
    private String custFreeTextField12;

    @Column(name = "cust_free_text_field_13")
    private String custFreeTextField13;

    @Column(name = "cust_free_text_field_14")
    private String custFreeTextField14;

    @Column(name = "cust_free_text_field_15")
    private String custFreeTextField15;

    @Column(name = "cust_free_text_field_16")
    private String custFreeTextField16;

    @Column(name = "cust_free_text_field_17")
    private String custFreeTextField17;

    @Column(name = "cust_free_text_field_18")
    private String custFreeTextField18;

    @Column(name = "cust_free_text_field_19")
    private String custFreeTextField19;

    @Column(name = "cust_free_text_field_20")
    private String custFreeTextField20;

    @Column(name = "cust_free_text_field_21")
    private String custFreeTextField21;

    @Column(name = "cust_free_text_field_22")
    private String custFreeTextField22;

    @Column(name = "cust_free_text_field_23")
    private String custFreeTextField23;

    @Column(name = "cust_free_text_field_24")
    private String custFreeTextField24;

    @Column(name = "cust_free_text_field_25")
    private String custFreeTextField25;

    @Column(name = "cust_free_text_field_26")
    private String custFreeTextField26;

    @Column(name = "cust_free_text_field_27")
    private String custFreeTextField27;

    @Column(name = "cust_free_text_field_28")
    private String custFreeTextField28;

    @Column(name = "cust_free_text_field_29")
    private String custFreeTextField29;

    @Column(name = "cust_free_text_field_30")
    private String custFreeTextField30;

    @Column(name = "cust_free_text_field_31")
    private String custFreeTextField31;


    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof AbsaCustomer)) {
            return false;
        }
        return id != null && id.equals(((AbsaCustomer) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "AbsaCustomer{" +
            "id=" + getId() +
            ", accountCurrency='" + getAccountCurrency() + "'" +
            ", accountNumber='" + getAccountNumber() + "'" +
            ", accountStatus='" + getAccountStatus() + "'" +
            ", accountLifecycleStatusCode='" + getAccountLifecycleStatusCode() + "'" +
            ", accrualStatusCode='" + getAccrualStatusCode() + "'" +
            ", casaAccountStatus='" + getCasaAccountStatus() + "'" +
            ", minorAccountStatusCode='" + getMinorAccountStatusCode() + "'" +
            ", accountTitle='" + getAccountTitle() + "'" +
            ", advanceAgainstUnclearedFunds=" + getAdvanceAgainstUnclearedFunds() +
            ", adHocStatementFlag='" + getAdHocStatementFlag() + "'" +
            ", additionalAddressFlag='" + getAdditionalAddressFlag() + "'" +
            ", atmFacilityFlag='" + getAtmFacilityFlag() + "'" +
            ", checkReorderThresholdNumber=" + getCheckReorderThresholdNumber() +
            ", deferredStmtGenerationDayOfMonth=" + getDeferredStmtGenerationDayOfMonth() +
            ", generateRateChangeIntimationFlag='" + getGenerateRateChangeIntimationFlag() + "'" +
            ", groupBonusInteresFlag='" + getGroupBonusInteresFlag() + "'" +
            ", holdMailFlag='" + getHoldMailFlag() + "'" +
            ", interestWaiverFlag='" + getInterestWaiverFlag() + "'" +
            ", internetBankingAccessFlag='" + getInternetBankingAccessFlag() + "'" +
            ", inwardDirectDebitAuthorizationFlag='" + getInwardDirectDebitAuthorizationFlag() + "'" +
            ", jointAccountFlag='" + getJointAccountFlag() + "'" +
            ", leadDaysIntimation='" + getLeadDaysIntimation() + "'" +
            ", mailAddressControlFlag='" + getMailAddressControlFlag() + "'" +
            ", mobileFacilityFlag='" + getMobileFacilityFlag() + "'" +
            ", numberOfCheckWithdrawals=" + getNumberOfCheckWithdrawals() +
            ", numberOfPastDueChecks=" + getNumberOfPastDueChecks() +
            ", numberOfStatementCopies=" + getNumberOfStatementCopies() +
            ", overdraftLimitAmount=" + getOverdraftLimitAmount() +
            ", pointOfSaleFacilityFlag='" + getPointOfSaleFacilityFlag() + "'" +
            ", standingInstructionFlag='" + getStandingInstructionFlag() + "'" +
            ", sweepoutInstructionFlag='" + getSweepoutInstructionFlag() + "'" +
            ", availableBalance=" + getAvailableBalance() +
            ", branchCode=" + getBranchCode() +
            ", branchName='" + getBranchName() + "'" +
            ", branchShortName='" + getBranchShortName() + "'" +
            ", creditsMonthTillDateAmount=" + getCreditsMonthTillDateAmount() +
            ", currentBalance=" + getCurrentBalance() +
            ", customerNumber='" + getCustomerNumber() + "'" +
            ", isAbsaCustomer='" + getIsAbsaCustomer() + "'" +
            ", fullName='" + getFullName() + "'" +
            ", accountOpeningDate='" + getAccountOpeningDate() + "'" +
            ", statementPeriodStartDate='" + getStatementPeriodStartDate() + "'" +
            ", statementPeriodEndDate='" + getStatementPeriodEndDate() + "'" +
            ", debitsLastDate='" + getDebitsLastDate() + "'" +
            ", creditLastDate='" + getCreditLastDate() + "'" +
            ", debitsMonthTillDateAmount='" + getDebitsMonthTillDateAmount() + "'" +
            ", debitsYearTillDateAmount=" + getDebitsYearTillDateAmount() +
            ", creditInterestAccruedAmount=" + getCreditInterestAccruedAmount() +
            ", debitInterestAccruedAmount=" + getDebitInterestAccruedAmount() +
            ", adjustedCreditInterestAccrued=" + getAdjustedCreditInterestAccrued() +
            ", adjustedDebitInterestAccrued=" + getAdjustedDebitInterestAccrued() +
            ", projectedTaxOnAccruedInterestAmount=" + getProjectedTaxOnAccruedInterestAmount() +
            ", interestAccruedInCurrentFinancialYear=" + getInterestAccruedInCurrentFinancialYear() +
            ", issuedInventoryPropertyType='" + getIssuedInventoryPropertyType() + "'" +
            ", lastIssuedCheckNumber=" + getLastIssuedCheckNumber() +
            ", languageCode='" + getLanguageCode() + "'" +
            ", lineNumber=" + getLineNumber() +
            ", minimumRequiredBalanceAmount=" + getMinimumRequiredBalanceAmount() +
            ", minimumRequiredTradingBalanceAmount=" + getMinimumRequiredTradingBalanceAmount() +
            ", mtdCreditsCount=" + getMtdCreditsCount() +
            ", mtdDebitsCount=" + getMtdDebitsCount() +
            ", netAvailableBalanceForWithdrawal=" + getNetAvailableBalanceForWithdrawal() +
            ", netBalanceAmount=" + getNetBalanceAmount() +
            ", passbookLifecycleStatusCode=" + getPassbookLifecycleStatusCode() +
            ", periodicAverageBalanceAmount=" + getPeriodicAverageBalanceAmount() +
            ", previousDayClosingBookBalance=" + getPreviousDayClosingBookBalance() +
            ", productCode=" + getProductCode() +
            ", productName='" + getProductName() + "'" +
            ", restrictedAccountFlag='" + getRestrictedAccountFlag() + "'" +
            ", staffFlag='" + getStaffFlag() + "'" +
            ", sweepinAmountOnLien=" + getSweepinAmountOnLien() +
            ", taxCode1=" + getTaxCode1() +
            ", taxCode2=" + getTaxCode2() +
            ", tdsExemptionLimitAmount1=" + getTdsExemptionLimitAmount1() +
            ", tdsExemptionLimitAmount2=" + getTdsExemptionLimitAmount2() +
            ", totalCASAHoldAmount=" + getTotalCASAHoldAmount() +
            ", totalUnclearFundAmount=" + getTotalUnclearFundAmount() +
            ", ytdCreditLastAmount=" + getYtdCreditLastAmount() +
            ", ytdCreditsCount=" + getYtdCreditsCount() +
            ", ytdDebitsCount=" + getYtdDebitsCount() +
            ", ytdDebitsLastAmount=" + getYtdDebitsLastAmount() +
            ", message='" + getMessage() + "'" +
            ", sourceInfo='" + getSourceInfo() + "'" +
            ", status='" + getStatus() + "'" +
            ", custFreeTextField1='" + getCustFreeTextField1() + "'" +
            ", custFreeTextField2='" + getCustFreeTextField2() + "'" +
            ", custFreeTextField3='" + getCustFreeTextField3() + "'" +
            ", custFreeTextField4='" + getCustFreeTextField4() + "'" +
            ", custFreeTextField5='" + getCustFreeTextField5() + "'" +
            ", custFreeTextField6='" + getCustFreeTextField6() + "'" +
            ", custFreeTextField7='" + getCustFreeTextField7() + "'" +
            ", custFreeTextField8='" + getCustFreeTextField8() + "'" +
            ", custFreeTextField9='" + getCustFreeTextField9() + "'" +
            ", custFreeTextField10='" + getCustFreeTextField10() + "'" +
            ", custFreeTextField11='" + getCustFreeTextField11() + "'" +
            ", custFreeTextField12='" + getCustFreeTextField12() + "'" +
            ", custFreeTextField13='" + getCustFreeTextField13() + "'" +
            ", custFreeTextField14='" + getCustFreeTextField14() + "'" +
            ", custFreeTextField15='" + getCustFreeTextField15() + "'" +
            ", custFreeTextField16='" + getCustFreeTextField16() + "'" +
            ", custFreeTextField17='" + getCustFreeTextField17() + "'" +
            ", custFreeTextField18='" + getCustFreeTextField18() + "'" +
            ", custFreeTextField19='" + getCustFreeTextField19() + "'" +
            ", custFreeTextField20='" + getCustFreeTextField20() + "'" +
            ", custFreeTextField21='" + getCustFreeTextField21() + "'" +
            ", custFreeTextField22='" + getCustFreeTextField22() + "'" +
            ", custFreeTextField23='" + getCustFreeTextField23() + "'" +
            ", custFreeTextField24='" + getCustFreeTextField24() + "'" +
            ", custFreeTextField25='" + getCustFreeTextField25() + "'" +
            ", custFreeTextField26='" + getCustFreeTextField26() + "'" +
            ", custFreeTextField27='" + getCustFreeTextField27() + "'" +
            ", custFreeTextField28='" + getCustFreeTextField28() + "'" +
            ", custFreeTextField29='" + getCustFreeTextField29() + "'" +
            ", custFreeTextField30='" + getCustFreeTextField30() + "'" +
            ", custFreeTextField31='" + getCustFreeTextField31() + "'" +
            "}";
    }


    public static AbsaCustomer  toAbsaCustomer(AmolCustomerInfoResponse amolCIResp){
        AbsaCustomer absaCustomer = new AbsaCustomer();
        Data data=amolCIResp.getData();
              absaCustomer.setAccountNumber(data.accountNumber);
        absaCustomer.setAccountTitle(data.accountTitle);
        absaCustomer.setCustomerNumber(data.customerNumber);
        absaCustomer.setIsAbsaCustomer(true);
        absaCustomer.setFullName("");
        absaCustomer.setAccountCurrency(data.accountCurrency);
        return absaCustomer;
    }

}
