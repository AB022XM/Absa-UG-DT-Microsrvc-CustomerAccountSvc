import dayjs from 'dayjs';
import { AccountStatus } from 'app/shared/model/enumerations/account-status.model';
import { AccountLifecycleStatusCode } from 'app/shared/model/enumerations/account-lifecycle-status-code.model';
import { CASAAccountStatus } from 'app/shared/model/enumerations/casa-account-status.model';
import { MinorAccountStatusCode } from 'app/shared/model/enumerations/minor-account-status-code.model';
import { GroupBonusInteresFlag } from 'app/shared/model/enumerations/group-bonus-interes-flag.model';
import { HoldMailFlag } from 'app/shared/model/enumerations/hold-mail-flag.model';
import { InterestWaiverFlag } from 'app/shared/model/enumerations/interest-waiver-flag.model';
import { LanguageCode } from 'app/shared/model/enumerations/language-code.model';

export interface IAbsaCustomer {
  id?: number;
  accountCurrency?: string | null;
  accountNumber?: string | null;
  accountStatus?: AccountStatus | null;
  accountLifecycleStatusCode?: AccountLifecycleStatusCode | null;
  accrualStatusCode?: string | null;
  casaAccountStatus?: CASAAccountStatus | null;
  minorAccountStatusCode?: MinorAccountStatusCode | null;
  accountTitle?: string | null;
  advanceAgainstUnclearedFunds?: number | null;
  adHocStatementFlag?: boolean | null;
  additionalAddressFlag?: boolean | null;
  atmFacilityFlag?: boolean | null;
  checkReorderThresholdNumber?: number | null;
  deferredStmtGenerationDayOfMonth?: number | null;
  generateRateChangeIntimationFlag?: boolean | null;
  groupBonusInteresFlag?: GroupBonusInteresFlag | null;
  holdMailFlag?: HoldMailFlag | null;
  interestWaiverFlag?: InterestWaiverFlag | null;
  internetBankingAccessFlag?: boolean | null;
  inwardDirectDebitAuthorizationFlag?: boolean | null;
  jointAccountFlag?: boolean | null;
  leadDaysIntimation?: boolean | null;
  mailAddressControlFlag?: boolean | null;
  mobileFacilityFlag?: boolean | null;
  numberOfCheckWithdrawals?: number | null;
  numberOfPastDueChecks?: number | null;
  numberOfStatementCopies?: number | null;
  overdraftLimitAmount?: number | null;
  pointOfSaleFacilityFlag?: boolean | null;
  standingInstructionFlag?: boolean | null;
  sweepoutInstructionFlag?: boolean | null;
  availableBalance?: number | null;
  branchCode?: number | null;
  branchName?: string | null;
  branchShortName?: string | null;
  creditsMonthTillDateAmount?: number | null;
  currentBalance?: number | null;
  customerNumber?: string | null;
  isAbsaCustomer?: boolean | null;
  fullName?: string | null;
  accountOpeningDate?: string | null;
  statementPeriodStartDate?: string | null;
  statementPeriodEndDate?: string | null;
  debitsLastDate?: string | null;
  creditLastDate?: string | null;
  debitsMonthTillDateAmount?: string | null;
  debitsYearTillDateAmount?: number | null;
  creditInterestAccruedAmount?: number | null;
  debitInterestAccruedAmount?: number | null;
  adjustedCreditInterestAccrued?: number | null;
  adjustedDebitInterestAccrued?: number | null;
  projectedTaxOnAccruedInterestAmount?: number | null;
  interestAccruedInCurrentFinancialYear?: number | null;
  issuedInventoryPropertyType?: string | null;
  lastIssuedCheckNumber?: number | null;
  languageCode?: LanguageCode | null;
  lineNumber?: number | null;
  minimumRequiredBalanceAmount?: number | null;
  minimumRequiredTradingBalanceAmount?: number | null;
  mtdCreditsCount?: number | null;
  mtdDebitsCount?: number | null;
  netAvailableBalanceForWithdrawal?: number | null;
  netBalanceAmount?: number | null;
  passbookLifecycleStatusCode?: number | null;
  periodicAverageBalanceAmount?: number | null;
  previousDayClosingBookBalance?: number | null;
  productCode?: number | null;
  productName?: string | null;
  restrictedAccountFlag?: boolean | null;
  staffFlag?: boolean | null;
  sweepinAmountOnLien?: number | null;
  taxCode1?: number | null;
  taxCode2?: number | null;
  tdsExemptionLimitAmount1?: number | null;
  tdsExemptionLimitAmount2?: number | null;
  totalCASAHoldAmount?: number | null;
  totalUnclearFundAmount?: number | null;
  ytdCreditLastAmount?: number | null;
  ytdCreditsCount?: number | null;
  ytdDebitsCount?: number | null;
  ytdDebitsLastAmount?: number | null;
  message?: string | null;
  sourceInfo?: string | null;
  status?: string | null;
  custFreeTextField1?: string | null;
  custFreeTextField2?: string | null;
  custFreeTextField3?: string | null;
  custFreeTextField4?: string | null;
  custFreeTextField5?: string | null;
  custFreeTextField6?: string | null;
  custFreeTextField7?: string | null;
  custFreeTextField8?: string | null;
  custFreeTextField9?: string | null;
  custFreeTextField10?: string | null;
  custFreeTextField11?: string | null;
  custFreeTextField12?: string | null;
  custFreeTextField13?: string | null;
  custFreeTextField14?: string | null;
  custFreeTextField15?: string | null;
  custFreeTextField16?: string | null;
  custFreeTextField17?: string | null;
  custFreeTextField18?: string | null;
  custFreeTextField19?: string | null;
  custFreeTextField20?: string | null;
  custFreeTextField21?: string | null;
  custFreeTextField22?: string | null;
  custFreeTextField23?: string | null;
  custFreeTextField24?: string | null;
  custFreeTextField25?: string | null;
  custFreeTextField26?: string | null;
  custFreeTextField27?: string | null;
  custFreeTextField28?: string | null;
  custFreeTextField29?: string | null;
  custFreeTextField30?: string | null;
  custFreeTextField31?: string | null;
}

export const defaultValue: Readonly<IAbsaCustomer> = {
  adHocStatementFlag: false,
  additionalAddressFlag: false,
  atmFacilityFlag: false,
  generateRateChangeIntimationFlag: false,
  internetBankingAccessFlag: false,
  inwardDirectDebitAuthorizationFlag: false,
  jointAccountFlag: false,
  leadDaysIntimation: false,
  mailAddressControlFlag: false,
  mobileFacilityFlag: false,
  pointOfSaleFacilityFlag: false,
  standingInstructionFlag: false,
  sweepoutInstructionFlag: false,
  isAbsaCustomer: false,
  restrictedAccountFlag: false,
  staffFlag: false,
};
