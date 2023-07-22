import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Input, InputGroup, FormGroup, Form, Row, Col, Table } from 'reactstrap';
import { Translate, translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IAbsaCustomer } from 'app/shared/model/AbsaUGDTMicrosrvcCustomerAccountSvc/absa-customer.model';
import { searchEntities, getEntities } from './absa-customer.reducer';

export const AbsaCustomer = () => {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const [search, setSearch] = useState('');

  const absaCustomerList = useAppSelector(state => state.absaugdtmicrosrvccustomeraccountsvc.absaCustomer.entities);
  const loading = useAppSelector(state => state.absaugdtmicrosrvccustomeraccountsvc.absaCustomer.loading);

  useEffect(() => {
    dispatch(getEntities({}));
  }, []);

  const startSearching = e => {
    if (search) {
      dispatch(searchEntities({ query: search }));
    }
    e.preventDefault();
  };

  const clear = () => {
    setSearch('');
    dispatch(getEntities({}));
  };

  const handleSearch = event => setSearch(event.target.value);

  const handleSyncList = () => {
    dispatch(getEntities({}));
  };

  return (
    <div>
      <h2 id="absa-customer-heading" data-cy="AbsaCustomerHeading">
        <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.home.title">
          Absa Customers
        </Translate>
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.home.refreshListLabel">
              Refresh List
            </Translate>
          </Button>
          <Link
            to="/absaugdtmicrosrvccustomeraccountsvc/absa-customer/new"
            className="btn btn-primary jh-create-entity"
            id="jh-create-entity"
            data-cy="entityCreateButton"
          >
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.home.createLabel">
              Create new Absa Customer
            </Translate>
          </Link>
        </div>
      </h2>
      <Row>
        <Col sm="12">
          <Form onSubmit={startSearching}>
            <FormGroup>
              <InputGroup>
                <Input
                  type="text"
                  name="search"
                  defaultValue={search}
                  onChange={handleSearch}
                  placeholder={translate(
                    'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.home.search'
                  )}
                />
                <Button className="input-group-addon">
                  <FontAwesomeIcon icon="search" />
                </Button>
                <Button type="reset" className="input-group-addon" onClick={clear}>
                  <FontAwesomeIcon icon="trash" />
                </Button>
              </InputGroup>
            </FormGroup>
          </Form>
        </Col>
      </Row>
      <div className="table-responsive">
        {absaCustomerList && absaCustomerList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.id">
                    ID
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.accountCurrency">
                    Account Currency
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.accountNumber">
                    Account Number
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.accountStatus">
                    Account Status
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.accountLifecycleStatusCode">
                    Account Lifecycle Status Code
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.accrualStatusCode">
                    Accrual Status Code
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.casaAccountStatus">
                    Casa Account Status
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.minorAccountStatusCode">
                    Minor Account Status Code
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.accountTitle">
                    Account Title
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.advanceAgainstUnclearedFunds">
                    Advance Against Uncleared Funds
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.adHocStatementFlag">
                    Ad Hoc Statement Flag
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.additionalAddressFlag">
                    Additional Address Flag
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.atmFacilityFlag">
                    Atm Facility Flag
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.checkReorderThresholdNumber">
                    Check Reorder Threshold Number
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.deferredStmtGenerationDayOfMonth">
                    Deferred Stmt Generation Day Of Month
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.generateRateChangeIntimationFlag">
                    Generate Rate Change Intimation Flag
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.groupBonusInteresFlag">
                    Group Bonus Interes Flag
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.holdMailFlag">
                    Hold Mail Flag
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.interestWaiverFlag">
                    Interest Waiver Flag
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.internetBankingAccessFlag">
                    Internet Banking Access Flag
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.inwardDirectDebitAuthorizationFlag">
                    Inward Direct Debit Authorization Flag
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.jointAccountFlag">
                    Joint Account Flag
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.leadDaysIntimation">
                    Lead Days Intimation
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.mailAddressControlFlag">
                    Mail Address Control Flag
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.mobileFacilityFlag">
                    Mobile Facility Flag
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.numberOfCheckWithdrawals">
                    Number Of Check Withdrawals
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.numberOfPastDueChecks">
                    Number Of Past Due Checks
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.numberOfStatementCopies">
                    Number Of Statement Copies
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.overdraftLimitAmount">
                    Overdraft Limit Amount
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.pointOfSaleFacilityFlag">
                    Point Of Sale Facility Flag
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.standingInstructionFlag">
                    Standing Instruction Flag
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.sweepoutInstructionFlag">
                    Sweepout Instruction Flag
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.availableBalance">
                    Available Balance
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.branchCode">
                    Branch Code
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.branchName">
                    Branch Name
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.branchShortName">
                    Branch Short Name
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.creditsMonthTillDateAmount">
                    Credits Month Till Date Amount
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.currentBalance">
                    Current Balance
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.customerNumber">
                    Customer Number
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.isAbsaCustomer">
                    Is Absa Customer
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.fullName">
                    Full Name
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.accountOpeningDate">
                    Account Opening Date
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.statementPeriodStartDate">
                    Statement Period Start Date
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.statementPeriodEndDate">
                    Statement Period End Date
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.debitsLastDate">
                    Debits Last Date
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.creditLastDate">
                    Credit Last Date
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.debitsMonthTillDateAmount">
                    Debits Month Till Date Amount
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.debitsYearTillDateAmount">
                    Debits Year Till Date Amount
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.creditInterestAccruedAmount">
                    Credit Interest Accrued Amount
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.debitInterestAccruedAmount">
                    Debit Interest Accrued Amount
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.adjustedCreditInterestAccrued">
                    Adjusted Credit Interest Accrued
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.adjustedDebitInterestAccrued">
                    Adjusted Debit Interest Accrued
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.projectedTaxOnAccruedInterestAmount">
                    Projected Tax On Accrued Interest Amount
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.interestAccruedInCurrentFinancialYear">
                    Interest Accrued In Current Financial Year
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.issuedInventoryPropertyType">
                    Issued Inventory Property Type
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.lastIssuedCheckNumber">
                    Last Issued Check Number
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.languageCode">
                    Language Code
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.lineNumber">
                    Line Number
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.minimumRequiredBalanceAmount">
                    Minimum Required Balance Amount
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.minimumRequiredTradingBalanceAmount">
                    Minimum Required Trading Balance Amount
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.mtdCreditsCount">
                    Mtd Credits Count
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.mtdDebitsCount">
                    Mtd Debits Count
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.netAvailableBalanceForWithdrawal">
                    Net Available Balance For Withdrawal
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.netBalanceAmount">
                    Net Balance Amount
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.passbookLifecycleStatusCode">
                    Passbook Lifecycle Status Code
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.periodicAverageBalanceAmount">
                    Periodic Average Balance Amount
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.previousDayClosingBookBalance">
                    Previous Day Closing Book Balance
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.productCode">
                    Product Code
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.productName">
                    Product Name
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.restrictedAccountFlag">
                    Restricted Account Flag
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.staffFlag">
                    Staff Flag
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.sweepinAmountOnLien">
                    Sweepin Amount On Lien
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.taxCode1">
                    Tax Code 1
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.taxCode2">
                    Tax Code 2
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.tdsExemptionLimitAmount1">
                    Tds Exemption Limit Amount 1
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.tdsExemptionLimitAmount2">
                    Tds Exemption Limit Amount 2
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.totalCASAHoldAmount">
                    Total CASA Hold Amount
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.totalUnclearFundAmount">
                    Total Unclear Fund Amount
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.ytdCreditLastAmount">
                    Ytd Credit Last Amount
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.ytdCreditsCount">
                    Ytd Credits Count
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.ytdDebitsCount">
                    Ytd Debits Count
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.ytdDebitsLastAmount">
                    Ytd Debits Last Amount
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.message">
                    Message
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.sourceInfo">
                    Source Info
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.status">
                    Status
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField1">
                    Cust Free Text Field 1
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField2">
                    Cust Free Text Field 2
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField3">
                    Cust Free Text Field 3
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField4">
                    Cust Free Text Field 4
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField5">
                    Cust Free Text Field 5
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField6">
                    Cust Free Text Field 6
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField7">
                    Cust Free Text Field 7
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField8">
                    Cust Free Text Field 8
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField9">
                    Cust Free Text Field 9
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField10">
                    Cust Free Text Field 10
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField11">
                    Cust Free Text Field 11
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField12">
                    Cust Free Text Field 12
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField13">
                    Cust Free Text Field 13
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField14">
                    Cust Free Text Field 14
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField15">
                    Cust Free Text Field 15
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField16">
                    Cust Free Text Field 16
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField17">
                    Cust Free Text Field 17
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField18">
                    Cust Free Text Field 18
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField19">
                    Cust Free Text Field 19
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField20">
                    Cust Free Text Field 20
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField21">
                    Cust Free Text Field 21
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField22">
                    Cust Free Text Field 22
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField23">
                    Cust Free Text Field 23
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField24">
                    Cust Free Text Field 24
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField25">
                    Cust Free Text Field 25
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField26">
                    Cust Free Text Field 26
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField27">
                    Cust Free Text Field 27
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField28">
                    Cust Free Text Field 28
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField29">
                    Cust Free Text Field 29
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField30">
                    Cust Free Text Field 30
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField31">
                    Cust Free Text Field 31
                  </Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {absaCustomerList.map((absaCustomer, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/absaugdtmicrosrvccustomeraccountsvc/absa-customer/${absaCustomer.id}`} color="link" size="sm">
                      {absaCustomer.id}
                    </Button>
                  </td>
                  <td>{absaCustomer.accountCurrency}</td>
                  <td>{absaCustomer.accountNumber}</td>
                  <td>
                    <Translate contentKey={`absaUgdtMicrosrvcCustomerAccountSvcApp.AccountStatus.${absaCustomer.accountStatus}`} />
                  </td>
                  <td>
                    <Translate
                      contentKey={`absaUgdtMicrosrvcCustomerAccountSvcApp.AccountLifecycleStatusCode.${absaCustomer.accountLifecycleStatusCode}`}
                    />
                  </td>
                  <td>{absaCustomer.accrualStatusCode}</td>
                  <td>
                    <Translate contentKey={`absaUgdtMicrosrvcCustomerAccountSvcApp.CASAAccountStatus.${absaCustomer.casaAccountStatus}`} />
                  </td>
                  <td>
                    <Translate
                      contentKey={`absaUgdtMicrosrvcCustomerAccountSvcApp.MinorAccountStatusCode.${absaCustomer.minorAccountStatusCode}`}
                    />
                  </td>
                  <td>{absaCustomer.accountTitle}</td>
                  <td>{absaCustomer.advanceAgainstUnclearedFunds}</td>
                  <td>{absaCustomer.adHocStatementFlag ? 'true' : 'false'}</td>
                  <td>{absaCustomer.additionalAddressFlag ? 'true' : 'false'}</td>
                  <td>{absaCustomer.atmFacilityFlag ? 'true' : 'false'}</td>
                  <td>{absaCustomer.checkReorderThresholdNumber}</td>
                  <td>{absaCustomer.deferredStmtGenerationDayOfMonth}</td>
                  <td>{absaCustomer.generateRateChangeIntimationFlag ? 'true' : 'false'}</td>
                  <td>
                    <Translate
                      contentKey={`absaUgdtMicrosrvcCustomerAccountSvcApp.GroupBonusInteresFlag.${absaCustomer.groupBonusInteresFlag}`}
                    />
                  </td>
                  <td>
                    <Translate contentKey={`absaUgdtMicrosrvcCustomerAccountSvcApp.HoldMailFlag.${absaCustomer.holdMailFlag}`} />
                  </td>
                  <td>
                    <Translate
                      contentKey={`absaUgdtMicrosrvcCustomerAccountSvcApp.InterestWaiverFlag.${absaCustomer.interestWaiverFlag}`}
                    />
                  </td>
                  <td>{absaCustomer.internetBankingAccessFlag ? 'true' : 'false'}</td>
                  <td>{absaCustomer.inwardDirectDebitAuthorizationFlag ? 'true' : 'false'}</td>
                  <td>{absaCustomer.jointAccountFlag ? 'true' : 'false'}</td>
                  <td>{absaCustomer.leadDaysIntimation ? 'true' : 'false'}</td>
                  <td>{absaCustomer.mailAddressControlFlag ? 'true' : 'false'}</td>
                  <td>{absaCustomer.mobileFacilityFlag ? 'true' : 'false'}</td>
                  <td>{absaCustomer.numberOfCheckWithdrawals}</td>
                  <td>{absaCustomer.numberOfPastDueChecks}</td>
                  <td>{absaCustomer.numberOfStatementCopies}</td>
                  <td>{absaCustomer.overdraftLimitAmount}</td>
                  <td>{absaCustomer.pointOfSaleFacilityFlag ? 'true' : 'false'}</td>
                  <td>{absaCustomer.standingInstructionFlag ? 'true' : 'false'}</td>
                  <td>{absaCustomer.sweepoutInstructionFlag ? 'true' : 'false'}</td>
                  <td>{absaCustomer.availableBalance}</td>
                  <td>{absaCustomer.branchCode}</td>
                  <td>{absaCustomer.branchName}</td>
                  <td>{absaCustomer.branchShortName}</td>
                  <td>{absaCustomer.creditsMonthTillDateAmount}</td>
                  <td>{absaCustomer.currentBalance}</td>
                  <td>{absaCustomer.customerNumber}</td>
                  <td>{absaCustomer.isAbsaCustomer ? 'true' : 'false'}</td>
                  <td>{absaCustomer.fullName}</td>
                  <td>
                    {absaCustomer.accountOpeningDate ? (
                      <TextFormat type="date" value={absaCustomer.accountOpeningDate} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {absaCustomer.statementPeriodStartDate ? (
                      <TextFormat type="date" value={absaCustomer.statementPeriodStartDate} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {absaCustomer.statementPeriodEndDate ? (
                      <TextFormat type="date" value={absaCustomer.statementPeriodEndDate} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {absaCustomer.debitsLastDate ? (
                      <TextFormat type="date" value={absaCustomer.debitsLastDate} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {absaCustomer.creditLastDate ? (
                      <TextFormat type="date" value={absaCustomer.creditLastDate} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {absaCustomer.debitsMonthTillDateAmount ? (
                      <TextFormat type="date" value={absaCustomer.debitsMonthTillDateAmount} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{absaCustomer.debitsYearTillDateAmount}</td>
                  <td>{absaCustomer.creditInterestAccruedAmount}</td>
                  <td>{absaCustomer.debitInterestAccruedAmount}</td>
                  <td>{absaCustomer.adjustedCreditInterestAccrued}</td>
                  <td>{absaCustomer.adjustedDebitInterestAccrued}</td>
                  <td>{absaCustomer.projectedTaxOnAccruedInterestAmount}</td>
                  <td>{absaCustomer.interestAccruedInCurrentFinancialYear}</td>
                  <td>{absaCustomer.issuedInventoryPropertyType}</td>
                  <td>{absaCustomer.lastIssuedCheckNumber}</td>
                  <td>
                    <Translate contentKey={`absaUgdtMicrosrvcCustomerAccountSvcApp.LanguageCode.${absaCustomer.languageCode}`} />
                  </td>
                  <td>{absaCustomer.lineNumber}</td>
                  <td>{absaCustomer.minimumRequiredBalanceAmount}</td>
                  <td>{absaCustomer.minimumRequiredTradingBalanceAmount}</td>
                  <td>{absaCustomer.mtdCreditsCount}</td>
                  <td>{absaCustomer.mtdDebitsCount}</td>
                  <td>{absaCustomer.netAvailableBalanceForWithdrawal}</td>
                  <td>{absaCustomer.netBalanceAmount}</td>
                  <td>{absaCustomer.passbookLifecycleStatusCode}</td>
                  <td>{absaCustomer.periodicAverageBalanceAmount}</td>
                  <td>{absaCustomer.previousDayClosingBookBalance}</td>
                  <td>{absaCustomer.productCode}</td>
                  <td>{absaCustomer.productName}</td>
                  <td>{absaCustomer.restrictedAccountFlag ? 'true' : 'false'}</td>
                  <td>{absaCustomer.staffFlag ? 'true' : 'false'}</td>
                  <td>{absaCustomer.sweepinAmountOnLien}</td>
                  <td>{absaCustomer.taxCode1}</td>
                  <td>{absaCustomer.taxCode2}</td>
                  <td>{absaCustomer.tdsExemptionLimitAmount1}</td>
                  <td>{absaCustomer.tdsExemptionLimitAmount2}</td>
                  <td>{absaCustomer.totalCASAHoldAmount}</td>
                  <td>{absaCustomer.totalUnclearFundAmount}</td>
                  <td>{absaCustomer.ytdCreditLastAmount}</td>
                  <td>{absaCustomer.ytdCreditsCount}</td>
                  <td>{absaCustomer.ytdDebitsCount}</td>
                  <td>{absaCustomer.ytdDebitsLastAmount}</td>
                  <td>{absaCustomer.message}</td>
                  <td>{absaCustomer.sourceInfo}</td>
                  <td>{absaCustomer.status}</td>
                  <td>{absaCustomer.custFreeTextField1}</td>
                  <td>{absaCustomer.custFreeTextField2}</td>
                  <td>{absaCustomer.custFreeTextField3}</td>
                  <td>{absaCustomer.custFreeTextField4}</td>
                  <td>{absaCustomer.custFreeTextField5}</td>
                  <td>{absaCustomer.custFreeTextField6}</td>
                  <td>{absaCustomer.custFreeTextField7}</td>
                  <td>{absaCustomer.custFreeTextField8}</td>
                  <td>{absaCustomer.custFreeTextField9}</td>
                  <td>{absaCustomer.custFreeTextField10}</td>
                  <td>{absaCustomer.custFreeTextField11}</td>
                  <td>{absaCustomer.custFreeTextField12}</td>
                  <td>{absaCustomer.custFreeTextField13}</td>
                  <td>{absaCustomer.custFreeTextField14}</td>
                  <td>{absaCustomer.custFreeTextField15}</td>
                  <td>{absaCustomer.custFreeTextField16}</td>
                  <td>{absaCustomer.custFreeTextField17}</td>
                  <td>{absaCustomer.custFreeTextField18}</td>
                  <td>{absaCustomer.custFreeTextField19}</td>
                  <td>{absaCustomer.custFreeTextField20}</td>
                  <td>{absaCustomer.custFreeTextField21}</td>
                  <td>{absaCustomer.custFreeTextField22}</td>
                  <td>{absaCustomer.custFreeTextField23}</td>
                  <td>{absaCustomer.custFreeTextField24}</td>
                  <td>{absaCustomer.custFreeTextField25}</td>
                  <td>{absaCustomer.custFreeTextField26}</td>
                  <td>{absaCustomer.custFreeTextField27}</td>
                  <td>{absaCustomer.custFreeTextField28}</td>
                  <td>{absaCustomer.custFreeTextField29}</td>
                  <td>{absaCustomer.custFreeTextField30}</td>
                  <td>{absaCustomer.custFreeTextField31}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button
                        tag={Link}
                        to={`/absaugdtmicrosrvccustomeraccountsvc/absa-customer/${absaCustomer.id}`}
                        color="info"
                        size="sm"
                        data-cy="entityDetailsButton"
                      >
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/absaugdtmicrosrvccustomeraccountsvc/absa-customer/${absaCustomer.id}/edit`}
                        color="primary"
                        size="sm"
                        data-cy="entityEditButton"
                      >
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/absaugdtmicrosrvccustomeraccountsvc/absa-customer/${absaCustomer.id}/delete`}
                        color="danger"
                        size="sm"
                        data-cy="entityDeleteButton"
                      >
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && (
            <div className="alert alert-warning">
              <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.home.notFound">
                No Absa Customers found
              </Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AbsaCustomer;
