import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './absa-customer.reducer';

export const AbsaCustomerDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const absaCustomerEntity = useAppSelector(state => state.absaugdtmicrosrvccustomeraccountsvc.absaCustomer.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="absaCustomerDetailsHeading">
          <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.detail.title">
            AbsaCustomer
          </Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.id}</dd>
          <dt>
            <span id="accountCurrency">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.accountCurrency">
                Account Currency
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.accountCurrency}</dd>
          <dt>
            <span id="accountNumber">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.accountNumber">
                Account Number
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.accountNumber}</dd>
          <dt>
            <span id="accountStatus">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.accountStatus">
                Account Status
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.accountStatus}</dd>
          <dt>
            <span id="accountLifecycleStatusCode">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.accountLifecycleStatusCode">
                Account Lifecycle Status Code
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.accountLifecycleStatusCode}</dd>
          <dt>
            <span id="accrualStatusCode">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.accrualStatusCode">
                Accrual Status Code
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.accrualStatusCode}</dd>
          <dt>
            <span id="casaAccountStatus">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.casaAccountStatus">
                Casa Account Status
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.casaAccountStatus}</dd>
          <dt>
            <span id="minorAccountStatusCode">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.minorAccountStatusCode">
                Minor Account Status Code
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.minorAccountStatusCode}</dd>
          <dt>
            <span id="accountTitle">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.accountTitle">
                Account Title
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.accountTitle}</dd>
          <dt>
            <span id="advanceAgainstUnclearedFunds">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.advanceAgainstUnclearedFunds">
                Advance Against Uncleared Funds
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.advanceAgainstUnclearedFunds}</dd>
          <dt>
            <span id="adHocStatementFlag">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.adHocStatementFlag">
                Ad Hoc Statement Flag
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.adHocStatementFlag ? 'true' : 'false'}</dd>
          <dt>
            <span id="additionalAddressFlag">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.additionalAddressFlag">
                Additional Address Flag
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.additionalAddressFlag ? 'true' : 'false'}</dd>
          <dt>
            <span id="atmFacilityFlag">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.atmFacilityFlag">
                Atm Facility Flag
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.atmFacilityFlag ? 'true' : 'false'}</dd>
          <dt>
            <span id="checkReorderThresholdNumber">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.checkReorderThresholdNumber">
                Check Reorder Threshold Number
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.checkReorderThresholdNumber}</dd>
          <dt>
            <span id="deferredStmtGenerationDayOfMonth">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.deferredStmtGenerationDayOfMonth">
                Deferred Stmt Generation Day Of Month
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.deferredStmtGenerationDayOfMonth}</dd>
          <dt>
            <span id="generateRateChangeIntimationFlag">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.generateRateChangeIntimationFlag">
                Generate Rate Change Intimation Flag
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.generateRateChangeIntimationFlag ? 'true' : 'false'}</dd>
          <dt>
            <span id="groupBonusInteresFlag">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.groupBonusInteresFlag">
                Group Bonus Interes Flag
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.groupBonusInteresFlag}</dd>
          <dt>
            <span id="holdMailFlag">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.holdMailFlag">
                Hold Mail Flag
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.holdMailFlag}</dd>
          <dt>
            <span id="interestWaiverFlag">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.interestWaiverFlag">
                Interest Waiver Flag
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.interestWaiverFlag}</dd>
          <dt>
            <span id="internetBankingAccessFlag">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.internetBankingAccessFlag">
                Internet Banking Access Flag
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.internetBankingAccessFlag ? 'true' : 'false'}</dd>
          <dt>
            <span id="inwardDirectDebitAuthorizationFlag">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.inwardDirectDebitAuthorizationFlag">
                Inward Direct Debit Authorization Flag
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.inwardDirectDebitAuthorizationFlag ? 'true' : 'false'}</dd>
          <dt>
            <span id="jointAccountFlag">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.jointAccountFlag">
                Joint Account Flag
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.jointAccountFlag ? 'true' : 'false'}</dd>
          <dt>
            <span id="leadDaysIntimation">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.leadDaysIntimation">
                Lead Days Intimation
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.leadDaysIntimation ? 'true' : 'false'}</dd>
          <dt>
            <span id="mailAddressControlFlag">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.mailAddressControlFlag">
                Mail Address Control Flag
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.mailAddressControlFlag ? 'true' : 'false'}</dd>
          <dt>
            <span id="mobileFacilityFlag">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.mobileFacilityFlag">
                Mobile Facility Flag
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.mobileFacilityFlag ? 'true' : 'false'}</dd>
          <dt>
            <span id="numberOfCheckWithdrawals">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.numberOfCheckWithdrawals">
                Number Of Check Withdrawals
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.numberOfCheckWithdrawals}</dd>
          <dt>
            <span id="numberOfPastDueChecks">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.numberOfPastDueChecks">
                Number Of Past Due Checks
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.numberOfPastDueChecks}</dd>
          <dt>
            <span id="numberOfStatementCopies">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.numberOfStatementCopies">
                Number Of Statement Copies
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.numberOfStatementCopies}</dd>
          <dt>
            <span id="overdraftLimitAmount">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.overdraftLimitAmount">
                Overdraft Limit Amount
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.overdraftLimitAmount}</dd>
          <dt>
            <span id="pointOfSaleFacilityFlag">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.pointOfSaleFacilityFlag">
                Point Of Sale Facility Flag
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.pointOfSaleFacilityFlag ? 'true' : 'false'}</dd>
          <dt>
            <span id="standingInstructionFlag">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.standingInstructionFlag">
                Standing Instruction Flag
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.standingInstructionFlag ? 'true' : 'false'}</dd>
          <dt>
            <span id="sweepoutInstructionFlag">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.sweepoutInstructionFlag">
                Sweepout Instruction Flag
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.sweepoutInstructionFlag ? 'true' : 'false'}</dd>
          <dt>
            <span id="availableBalance">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.availableBalance">
                Available Balance
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.availableBalance}</dd>
          <dt>
            <span id="branchCode">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.branchCode">
                Branch Code
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.branchCode}</dd>
          <dt>
            <span id="branchName">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.branchName">
                Branch Name
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.branchName}</dd>
          <dt>
            <span id="branchShortName">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.branchShortName">
                Branch Short Name
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.branchShortName}</dd>
          <dt>
            <span id="creditsMonthTillDateAmount">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.creditsMonthTillDateAmount">
                Credits Month Till Date Amount
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.creditsMonthTillDateAmount}</dd>
          <dt>
            <span id="currentBalance">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.currentBalance">
                Current Balance
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.currentBalance}</dd>
          <dt>
            <span id="customerNumber">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.customerNumber">
                Customer Number
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.customerNumber}</dd>
          <dt>
            <span id="isAbsaCustomer">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.isAbsaCustomer">
                Is Absa Customer
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.isAbsaCustomer ? 'true' : 'false'}</dd>
          <dt>
            <span id="fullName">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.fullName">
                Full Name
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.fullName}</dd>
          <dt>
            <span id="accountOpeningDate">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.accountOpeningDate">
                Account Opening Date
              </Translate>
            </span>
          </dt>
          <dd>
            {absaCustomerEntity.accountOpeningDate ? (
              <TextFormat value={absaCustomerEntity.accountOpeningDate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="statementPeriodStartDate">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.statementPeriodStartDate">
                Statement Period Start Date
              </Translate>
            </span>
          </dt>
          <dd>
            {absaCustomerEntity.statementPeriodStartDate ? (
              <TextFormat value={absaCustomerEntity.statementPeriodStartDate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="statementPeriodEndDate">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.statementPeriodEndDate">
                Statement Period End Date
              </Translate>
            </span>
          </dt>
          <dd>
            {absaCustomerEntity.statementPeriodEndDate ? (
              <TextFormat value={absaCustomerEntity.statementPeriodEndDate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="debitsLastDate">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.debitsLastDate">
                Debits Last Date
              </Translate>
            </span>
          </dt>
          <dd>
            {absaCustomerEntity.debitsLastDate ? (
              <TextFormat value={absaCustomerEntity.debitsLastDate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="creditLastDate">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.creditLastDate">
                Credit Last Date
              </Translate>
            </span>
          </dt>
          <dd>
            {absaCustomerEntity.creditLastDate ? (
              <TextFormat value={absaCustomerEntity.creditLastDate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="debitsMonthTillDateAmount">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.debitsMonthTillDateAmount">
                Debits Month Till Date Amount
              </Translate>
            </span>
          </dt>
          <dd>
            {absaCustomerEntity.debitsMonthTillDateAmount ? (
              <TextFormat value={absaCustomerEntity.debitsMonthTillDateAmount} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="debitsYearTillDateAmount">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.debitsYearTillDateAmount">
                Debits Year Till Date Amount
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.debitsYearTillDateAmount}</dd>
          <dt>
            <span id="creditInterestAccruedAmount">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.creditInterestAccruedAmount">
                Credit Interest Accrued Amount
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.creditInterestAccruedAmount}</dd>
          <dt>
            <span id="debitInterestAccruedAmount">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.debitInterestAccruedAmount">
                Debit Interest Accrued Amount
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.debitInterestAccruedAmount}</dd>
          <dt>
            <span id="adjustedCreditInterestAccrued">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.adjustedCreditInterestAccrued">
                Adjusted Credit Interest Accrued
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.adjustedCreditInterestAccrued}</dd>
          <dt>
            <span id="adjustedDebitInterestAccrued">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.adjustedDebitInterestAccrued">
                Adjusted Debit Interest Accrued
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.adjustedDebitInterestAccrued}</dd>
          <dt>
            <span id="projectedTaxOnAccruedInterestAmount">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.projectedTaxOnAccruedInterestAmount">
                Projected Tax On Accrued Interest Amount
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.projectedTaxOnAccruedInterestAmount}</dd>
          <dt>
            <span id="interestAccruedInCurrentFinancialYear">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.interestAccruedInCurrentFinancialYear">
                Interest Accrued In Current Financial Year
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.interestAccruedInCurrentFinancialYear}</dd>
          <dt>
            <span id="issuedInventoryPropertyType">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.issuedInventoryPropertyType">
                Issued Inventory Property Type
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.issuedInventoryPropertyType}</dd>
          <dt>
            <span id="lastIssuedCheckNumber">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.lastIssuedCheckNumber">
                Last Issued Check Number
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.lastIssuedCheckNumber}</dd>
          <dt>
            <span id="languageCode">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.languageCode">
                Language Code
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.languageCode}</dd>
          <dt>
            <span id="lineNumber">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.lineNumber">
                Line Number
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.lineNumber}</dd>
          <dt>
            <span id="minimumRequiredBalanceAmount">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.minimumRequiredBalanceAmount">
                Minimum Required Balance Amount
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.minimumRequiredBalanceAmount}</dd>
          <dt>
            <span id="minimumRequiredTradingBalanceAmount">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.minimumRequiredTradingBalanceAmount">
                Minimum Required Trading Balance Amount
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.minimumRequiredTradingBalanceAmount}</dd>
          <dt>
            <span id="mtdCreditsCount">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.mtdCreditsCount">
                Mtd Credits Count
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.mtdCreditsCount}</dd>
          <dt>
            <span id="mtdDebitsCount">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.mtdDebitsCount">
                Mtd Debits Count
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.mtdDebitsCount}</dd>
          <dt>
            <span id="netAvailableBalanceForWithdrawal">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.netAvailableBalanceForWithdrawal">
                Net Available Balance For Withdrawal
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.netAvailableBalanceForWithdrawal}</dd>
          <dt>
            <span id="netBalanceAmount">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.netBalanceAmount">
                Net Balance Amount
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.netBalanceAmount}</dd>
          <dt>
            <span id="passbookLifecycleStatusCode">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.passbookLifecycleStatusCode">
                Passbook Lifecycle Status Code
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.passbookLifecycleStatusCode}</dd>
          <dt>
            <span id="periodicAverageBalanceAmount">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.periodicAverageBalanceAmount">
                Periodic Average Balance Amount
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.periodicAverageBalanceAmount}</dd>
          <dt>
            <span id="previousDayClosingBookBalance">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.previousDayClosingBookBalance">
                Previous Day Closing Book Balance
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.previousDayClosingBookBalance}</dd>
          <dt>
            <span id="productCode">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.productCode">
                Product Code
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.productCode}</dd>
          <dt>
            <span id="productName">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.productName">
                Product Name
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.productName}</dd>
          <dt>
            <span id="restrictedAccountFlag">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.restrictedAccountFlag">
                Restricted Account Flag
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.restrictedAccountFlag ? 'true' : 'false'}</dd>
          <dt>
            <span id="staffFlag">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.staffFlag">
                Staff Flag
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.staffFlag ? 'true' : 'false'}</dd>
          <dt>
            <span id="sweepinAmountOnLien">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.sweepinAmountOnLien">
                Sweepin Amount On Lien
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.sweepinAmountOnLien}</dd>
          <dt>
            <span id="taxCode1">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.taxCode1">
                Tax Code 1
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.taxCode1}</dd>
          <dt>
            <span id="taxCode2">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.taxCode2">
                Tax Code 2
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.taxCode2}</dd>
          <dt>
            <span id="tdsExemptionLimitAmount1">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.tdsExemptionLimitAmount1">
                Tds Exemption Limit Amount 1
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.tdsExemptionLimitAmount1}</dd>
          <dt>
            <span id="tdsExemptionLimitAmount2">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.tdsExemptionLimitAmount2">
                Tds Exemption Limit Amount 2
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.tdsExemptionLimitAmount2}</dd>
          <dt>
            <span id="totalCASAHoldAmount">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.totalCASAHoldAmount">
                Total CASA Hold Amount
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.totalCASAHoldAmount}</dd>
          <dt>
            <span id="totalUnclearFundAmount">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.totalUnclearFundAmount">
                Total Unclear Fund Amount
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.totalUnclearFundAmount}</dd>
          <dt>
            <span id="ytdCreditLastAmount">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.ytdCreditLastAmount">
                Ytd Credit Last Amount
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.ytdCreditLastAmount}</dd>
          <dt>
            <span id="ytdCreditsCount">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.ytdCreditsCount">
                Ytd Credits Count
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.ytdCreditsCount}</dd>
          <dt>
            <span id="ytdDebitsCount">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.ytdDebitsCount">
                Ytd Debits Count
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.ytdDebitsCount}</dd>
          <dt>
            <span id="ytdDebitsLastAmount">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.ytdDebitsLastAmount">
                Ytd Debits Last Amount
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.ytdDebitsLastAmount}</dd>
          <dt>
            <span id="message">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.message">
                Message
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.message}</dd>
          <dt>
            <span id="sourceInfo">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.sourceInfo">
                Source Info
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.sourceInfo}</dd>
          <dt>
            <span id="status">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.status">
                Status
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.status}</dd>
          <dt>
            <span id="custFreeTextField1">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField1">
                Cust Free Text Field 1
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.custFreeTextField1}</dd>
          <dt>
            <span id="custFreeTextField2">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField2">
                Cust Free Text Field 2
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.custFreeTextField2}</dd>
          <dt>
            <span id="custFreeTextField3">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField3">
                Cust Free Text Field 3
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.custFreeTextField3}</dd>
          <dt>
            <span id="custFreeTextField4">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField4">
                Cust Free Text Field 4
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.custFreeTextField4}</dd>
          <dt>
            <span id="custFreeTextField5">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField5">
                Cust Free Text Field 5
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.custFreeTextField5}</dd>
          <dt>
            <span id="custFreeTextField6">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField6">
                Cust Free Text Field 6
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.custFreeTextField6}</dd>
          <dt>
            <span id="custFreeTextField7">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField7">
                Cust Free Text Field 7
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.custFreeTextField7}</dd>
          <dt>
            <span id="custFreeTextField8">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField8">
                Cust Free Text Field 8
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.custFreeTextField8}</dd>
          <dt>
            <span id="custFreeTextField9">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField9">
                Cust Free Text Field 9
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.custFreeTextField9}</dd>
          <dt>
            <span id="custFreeTextField10">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField10">
                Cust Free Text Field 10
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.custFreeTextField10}</dd>
          <dt>
            <span id="custFreeTextField11">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField11">
                Cust Free Text Field 11
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.custFreeTextField11}</dd>
          <dt>
            <span id="custFreeTextField12">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField12">
                Cust Free Text Field 12
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.custFreeTextField12}</dd>
          <dt>
            <span id="custFreeTextField13">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField13">
                Cust Free Text Field 13
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.custFreeTextField13}</dd>
          <dt>
            <span id="custFreeTextField14">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField14">
                Cust Free Text Field 14
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.custFreeTextField14}</dd>
          <dt>
            <span id="custFreeTextField15">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField15">
                Cust Free Text Field 15
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.custFreeTextField15}</dd>
          <dt>
            <span id="custFreeTextField16">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField16">
                Cust Free Text Field 16
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.custFreeTextField16}</dd>
          <dt>
            <span id="custFreeTextField17">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField17">
                Cust Free Text Field 17
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.custFreeTextField17}</dd>
          <dt>
            <span id="custFreeTextField18">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField18">
                Cust Free Text Field 18
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.custFreeTextField18}</dd>
          <dt>
            <span id="custFreeTextField19">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField19">
                Cust Free Text Field 19
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.custFreeTextField19}</dd>
          <dt>
            <span id="custFreeTextField20">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField20">
                Cust Free Text Field 20
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.custFreeTextField20}</dd>
          <dt>
            <span id="custFreeTextField21">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField21">
                Cust Free Text Field 21
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.custFreeTextField21}</dd>
          <dt>
            <span id="custFreeTextField22">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField22">
                Cust Free Text Field 22
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.custFreeTextField22}</dd>
          <dt>
            <span id="custFreeTextField23">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField23">
                Cust Free Text Field 23
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.custFreeTextField23}</dd>
          <dt>
            <span id="custFreeTextField24">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField24">
                Cust Free Text Field 24
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.custFreeTextField24}</dd>
          <dt>
            <span id="custFreeTextField25">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField25">
                Cust Free Text Field 25
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.custFreeTextField25}</dd>
          <dt>
            <span id="custFreeTextField26">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField26">
                Cust Free Text Field 26
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.custFreeTextField26}</dd>
          <dt>
            <span id="custFreeTextField27">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField27">
                Cust Free Text Field 27
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.custFreeTextField27}</dd>
          <dt>
            <span id="custFreeTextField28">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField28">
                Cust Free Text Field 28
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.custFreeTextField28}</dd>
          <dt>
            <span id="custFreeTextField29">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField29">
                Cust Free Text Field 29
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.custFreeTextField29}</dd>
          <dt>
            <span id="custFreeTextField30">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField30">
                Cust Free Text Field 30
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.custFreeTextField30}</dd>
          <dt>
            <span id="custFreeTextField31">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField31">
                Cust Free Text Field 31
              </Translate>
            </span>
          </dt>
          <dd>{absaCustomerEntity.custFreeTextField31}</dd>
        </dl>
        <Button tag={Link} to="/absaugdtmicrosrvccustomeraccountsvc/absa-customer" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/absaugdtmicrosrvccustomeraccountsvc/absa-customer/${absaCustomerEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default AbsaCustomerDetail;
