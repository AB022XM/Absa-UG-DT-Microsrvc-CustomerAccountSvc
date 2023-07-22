import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IAbsaCustomer } from 'app/shared/model/AbsaUGDTMicrosrvcCustomerAccountSvc/absa-customer.model';
import { AccountStatus } from 'app/shared/model/enumerations/account-status.model';
import { AccountLifecycleStatusCode } from 'app/shared/model/enumerations/account-lifecycle-status-code.model';
import { CASAAccountStatus } from 'app/shared/model/enumerations/casa-account-status.model';
import { MinorAccountStatusCode } from 'app/shared/model/enumerations/minor-account-status-code.model';
import { GroupBonusInteresFlag } from 'app/shared/model/enumerations/group-bonus-interes-flag.model';
import { HoldMailFlag } from 'app/shared/model/enumerations/hold-mail-flag.model';
import { InterestWaiverFlag } from 'app/shared/model/enumerations/interest-waiver-flag.model';
import { LanguageCode } from 'app/shared/model/enumerations/language-code.model';
import { getEntity, updateEntity, createEntity, reset } from './absa-customer.reducer';

export const AbsaCustomerUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const absaCustomerEntity = useAppSelector(state => state.absaugdtmicrosrvccustomeraccountsvc.absaCustomer.entity);
  const loading = useAppSelector(state => state.absaugdtmicrosrvccustomeraccountsvc.absaCustomer.loading);
  const updating = useAppSelector(state => state.absaugdtmicrosrvccustomeraccountsvc.absaCustomer.updating);
  const updateSuccess = useAppSelector(state => state.absaugdtmicrosrvccustomeraccountsvc.absaCustomer.updateSuccess);
  const accountStatusValues = Object.keys(AccountStatus);
  const accountLifecycleStatusCodeValues = Object.keys(AccountLifecycleStatusCode);
  const cASAAccountStatusValues = Object.keys(CASAAccountStatus);
  const minorAccountStatusCodeValues = Object.keys(MinorAccountStatusCode);
  const groupBonusInteresFlagValues = Object.keys(GroupBonusInteresFlag);
  const holdMailFlagValues = Object.keys(HoldMailFlag);
  const interestWaiverFlagValues = Object.keys(InterestWaiverFlag);
  const languageCodeValues = Object.keys(LanguageCode);

  const handleClose = () => {
    navigate('/absaugdtmicrosrvccustomeraccountsvc/absa-customer');
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    values.accountOpeningDate = convertDateTimeToServer(values.accountOpeningDate);
    values.statementPeriodStartDate = convertDateTimeToServer(values.statementPeriodStartDate);
    values.statementPeriodEndDate = convertDateTimeToServer(values.statementPeriodEndDate);
    values.debitsLastDate = convertDateTimeToServer(values.debitsLastDate);
    values.creditLastDate = convertDateTimeToServer(values.creditLastDate);
    values.debitsMonthTillDateAmount = convertDateTimeToServer(values.debitsMonthTillDateAmount);

    const entity = {
      ...absaCustomerEntity,
      ...values,
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {
          accountOpeningDate: displayDefaultDateTime(),
          statementPeriodStartDate: displayDefaultDateTime(),
          statementPeriodEndDate: displayDefaultDateTime(),
          debitsLastDate: displayDefaultDateTime(),
          creditLastDate: displayDefaultDateTime(),
          debitsMonthTillDateAmount: displayDefaultDateTime(),
        }
      : {
          accountStatus: 'Active',
          accountLifecycleStatusCode: 'ACTIVE',
          casaAccountStatus: 'ACTIVE',
          minorAccountStatusCode: 'MAJOR',
          groupBonusInteresFlag: 'N',
          holdMailFlag: 'ON_HOLD',
          interestWaiverFlag: 'NO_INTEREST_WAIVER',
          languageCode: 'English',
          ...absaCustomerEntity,
          accountOpeningDate: convertDateTimeFromServer(absaCustomerEntity.accountOpeningDate),
          statementPeriodStartDate: convertDateTimeFromServer(absaCustomerEntity.statementPeriodStartDate),
          statementPeriodEndDate: convertDateTimeFromServer(absaCustomerEntity.statementPeriodEndDate),
          debitsLastDate: convertDateTimeFromServer(absaCustomerEntity.debitsLastDate),
          creditLastDate: convertDateTimeFromServer(absaCustomerEntity.creditLastDate),
          debitsMonthTillDateAmount: convertDateTimeFromServer(absaCustomerEntity.debitsMonthTillDateAmount),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2
            id="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.home.createOrEditLabel"
            data-cy="AbsaCustomerCreateUpdateHeading"
          >
            <Translate contentKey="absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.home.createOrEditLabel">
              Create or edit a AbsaCustomer
            </Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? (
                <ValidatedField
                  name="id"
                  required
                  readOnly
                  id="absa-customer-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.accountCurrency')}
                id="absa-customer-accountCurrency"
                name="accountCurrency"
                data-cy="accountCurrency"
                type="text"
              />
              <ValidatedField
                label={translate('absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.accountNumber')}
                id="absa-customer-accountNumber"
                name="accountNumber"
                data-cy="accountNumber"
                type="text"
              />
              <ValidatedField
                label={translate('absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.accountStatus')}
                id="absa-customer-accountStatus"
                name="accountStatus"
                data-cy="accountStatus"
                type="select"
              >
                {accountStatusValues.map(accountStatus => (
                  <option value={accountStatus} key={accountStatus}>
                    {translate('absaUgdtMicrosrvcCustomerAccountSvcApp.AccountStatus.' + accountStatus)}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.accountLifecycleStatusCode'
                )}
                id="absa-customer-accountLifecycleStatusCode"
                name="accountLifecycleStatusCode"
                data-cy="accountLifecycleStatusCode"
                type="select"
              >
                {accountLifecycleStatusCodeValues.map(accountLifecycleStatusCode => (
                  <option value={accountLifecycleStatusCode} key={accountLifecycleStatusCode}>
                    {translate('absaUgdtMicrosrvcCustomerAccountSvcApp.AccountLifecycleStatusCode.' + accountLifecycleStatusCode)}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.accrualStatusCode'
                )}
                id="absa-customer-accrualStatusCode"
                name="accrualStatusCode"
                data-cy="accrualStatusCode"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.casaAccountStatus'
                )}
                id="absa-customer-casaAccountStatus"
                name="casaAccountStatus"
                data-cy="casaAccountStatus"
                type="select"
              >
                {cASAAccountStatusValues.map(cASAAccountStatus => (
                  <option value={cASAAccountStatus} key={cASAAccountStatus}>
                    {translate('absaUgdtMicrosrvcCustomerAccountSvcApp.CASAAccountStatus.' + cASAAccountStatus)}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.minorAccountStatusCode'
                )}
                id="absa-customer-minorAccountStatusCode"
                name="minorAccountStatusCode"
                data-cy="minorAccountStatusCode"
                type="select"
              >
                {minorAccountStatusCodeValues.map(minorAccountStatusCode => (
                  <option value={minorAccountStatusCode} key={minorAccountStatusCode}>
                    {translate('absaUgdtMicrosrvcCustomerAccountSvcApp.MinorAccountStatusCode.' + minorAccountStatusCode)}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label={translate('absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.accountTitle')}
                id="absa-customer-accountTitle"
                name="accountTitle"
                data-cy="accountTitle"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.advanceAgainstUnclearedFunds'
                )}
                id="absa-customer-advanceAgainstUnclearedFunds"
                name="advanceAgainstUnclearedFunds"
                data-cy="advanceAgainstUnclearedFunds"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.adHocStatementFlag'
                )}
                id="absa-customer-adHocStatementFlag"
                name="adHocStatementFlag"
                data-cy="adHocStatementFlag"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.additionalAddressFlag'
                )}
                id="absa-customer-additionalAddressFlag"
                name="additionalAddressFlag"
                data-cy="additionalAddressFlag"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate('absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.atmFacilityFlag')}
                id="absa-customer-atmFacilityFlag"
                name="atmFacilityFlag"
                data-cy="atmFacilityFlag"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.checkReorderThresholdNumber'
                )}
                id="absa-customer-checkReorderThresholdNumber"
                name="checkReorderThresholdNumber"
                data-cy="checkReorderThresholdNumber"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.deferredStmtGenerationDayOfMonth'
                )}
                id="absa-customer-deferredStmtGenerationDayOfMonth"
                name="deferredStmtGenerationDayOfMonth"
                data-cy="deferredStmtGenerationDayOfMonth"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.generateRateChangeIntimationFlag'
                )}
                id="absa-customer-generateRateChangeIntimationFlag"
                name="generateRateChangeIntimationFlag"
                data-cy="generateRateChangeIntimationFlag"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.groupBonusInteresFlag'
                )}
                id="absa-customer-groupBonusInteresFlag"
                name="groupBonusInteresFlag"
                data-cy="groupBonusInteresFlag"
                type="select"
              >
                {groupBonusInteresFlagValues.map(groupBonusInteresFlag => (
                  <option value={groupBonusInteresFlag} key={groupBonusInteresFlag}>
                    {translate('absaUgdtMicrosrvcCustomerAccountSvcApp.GroupBonusInteresFlag.' + groupBonusInteresFlag)}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label={translate('absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.holdMailFlag')}
                id="absa-customer-holdMailFlag"
                name="holdMailFlag"
                data-cy="holdMailFlag"
                type="select"
              >
                {holdMailFlagValues.map(holdMailFlag => (
                  <option value={holdMailFlag} key={holdMailFlag}>
                    {translate('absaUgdtMicrosrvcCustomerAccountSvcApp.HoldMailFlag.' + holdMailFlag)}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.interestWaiverFlag'
                )}
                id="absa-customer-interestWaiverFlag"
                name="interestWaiverFlag"
                data-cy="interestWaiverFlag"
                type="select"
              >
                {interestWaiverFlagValues.map(interestWaiverFlag => (
                  <option value={interestWaiverFlag} key={interestWaiverFlag}>
                    {translate('absaUgdtMicrosrvcCustomerAccountSvcApp.InterestWaiverFlag.' + interestWaiverFlag)}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.internetBankingAccessFlag'
                )}
                id="absa-customer-internetBankingAccessFlag"
                name="internetBankingAccessFlag"
                data-cy="internetBankingAccessFlag"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.inwardDirectDebitAuthorizationFlag'
                )}
                id="absa-customer-inwardDirectDebitAuthorizationFlag"
                name="inwardDirectDebitAuthorizationFlag"
                data-cy="inwardDirectDebitAuthorizationFlag"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate('absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.jointAccountFlag')}
                id="absa-customer-jointAccountFlag"
                name="jointAccountFlag"
                data-cy="jointAccountFlag"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.leadDaysIntimation'
                )}
                id="absa-customer-leadDaysIntimation"
                name="leadDaysIntimation"
                data-cy="leadDaysIntimation"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.mailAddressControlFlag'
                )}
                id="absa-customer-mailAddressControlFlag"
                name="mailAddressControlFlag"
                data-cy="mailAddressControlFlag"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.mobileFacilityFlag'
                )}
                id="absa-customer-mobileFacilityFlag"
                name="mobileFacilityFlag"
                data-cy="mobileFacilityFlag"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.numberOfCheckWithdrawals'
                )}
                id="absa-customer-numberOfCheckWithdrawals"
                name="numberOfCheckWithdrawals"
                data-cy="numberOfCheckWithdrawals"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.numberOfPastDueChecks'
                )}
                id="absa-customer-numberOfPastDueChecks"
                name="numberOfPastDueChecks"
                data-cy="numberOfPastDueChecks"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.numberOfStatementCopies'
                )}
                id="absa-customer-numberOfStatementCopies"
                name="numberOfStatementCopies"
                data-cy="numberOfStatementCopies"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.overdraftLimitAmount'
                )}
                id="absa-customer-overdraftLimitAmount"
                name="overdraftLimitAmount"
                data-cy="overdraftLimitAmount"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.pointOfSaleFacilityFlag'
                )}
                id="absa-customer-pointOfSaleFacilityFlag"
                name="pointOfSaleFacilityFlag"
                data-cy="pointOfSaleFacilityFlag"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.standingInstructionFlag'
                )}
                id="absa-customer-standingInstructionFlag"
                name="standingInstructionFlag"
                data-cy="standingInstructionFlag"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.sweepoutInstructionFlag'
                )}
                id="absa-customer-sweepoutInstructionFlag"
                name="sweepoutInstructionFlag"
                data-cy="sweepoutInstructionFlag"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate('absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.availableBalance')}
                id="absa-customer-availableBalance"
                name="availableBalance"
                data-cy="availableBalance"
                type="text"
              />
              <ValidatedField
                label={translate('absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.branchCode')}
                id="absa-customer-branchCode"
                name="branchCode"
                data-cy="branchCode"
                type="text"
              />
              <ValidatedField
                label={translate('absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.branchName')}
                id="absa-customer-branchName"
                name="branchName"
                data-cy="branchName"
                type="text"
              />
              <ValidatedField
                label={translate('absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.branchShortName')}
                id="absa-customer-branchShortName"
                name="branchShortName"
                data-cy="branchShortName"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.creditsMonthTillDateAmount'
                )}
                id="absa-customer-creditsMonthTillDateAmount"
                name="creditsMonthTillDateAmount"
                data-cy="creditsMonthTillDateAmount"
                type="text"
              />
              <ValidatedField
                label={translate('absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.currentBalance')}
                id="absa-customer-currentBalance"
                name="currentBalance"
                data-cy="currentBalance"
                type="text"
              />
              <ValidatedField
                label={translate('absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.customerNumber')}
                id="absa-customer-customerNumber"
                name="customerNumber"
                data-cy="customerNumber"
                type="text"
              />
              <ValidatedField
                label={translate('absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.isAbsaCustomer')}
                id="absa-customer-isAbsaCustomer"
                name="isAbsaCustomer"
                data-cy="isAbsaCustomer"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate('absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.fullName')}
                id="absa-customer-fullName"
                name="fullName"
                data-cy="fullName"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.accountOpeningDate'
                )}
                id="absa-customer-accountOpeningDate"
                name="accountOpeningDate"
                data-cy="accountOpeningDate"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.statementPeriodStartDate'
                )}
                id="absa-customer-statementPeriodStartDate"
                name="statementPeriodStartDate"
                data-cy="statementPeriodStartDate"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.statementPeriodEndDate'
                )}
                id="absa-customer-statementPeriodEndDate"
                name="statementPeriodEndDate"
                data-cy="statementPeriodEndDate"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label={translate('absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.debitsLastDate')}
                id="absa-customer-debitsLastDate"
                name="debitsLastDate"
                data-cy="debitsLastDate"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label={translate('absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.creditLastDate')}
                id="absa-customer-creditLastDate"
                name="creditLastDate"
                data-cy="creditLastDate"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.debitsMonthTillDateAmount'
                )}
                id="absa-customer-debitsMonthTillDateAmount"
                name="debitsMonthTillDateAmount"
                data-cy="debitsMonthTillDateAmount"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.debitsYearTillDateAmount'
                )}
                id="absa-customer-debitsYearTillDateAmount"
                name="debitsYearTillDateAmount"
                data-cy="debitsYearTillDateAmount"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.creditInterestAccruedAmount'
                )}
                id="absa-customer-creditInterestAccruedAmount"
                name="creditInterestAccruedAmount"
                data-cy="creditInterestAccruedAmount"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.debitInterestAccruedAmount'
                )}
                id="absa-customer-debitInterestAccruedAmount"
                name="debitInterestAccruedAmount"
                data-cy="debitInterestAccruedAmount"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.adjustedCreditInterestAccrued'
                )}
                id="absa-customer-adjustedCreditInterestAccrued"
                name="adjustedCreditInterestAccrued"
                data-cy="adjustedCreditInterestAccrued"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.adjustedDebitInterestAccrued'
                )}
                id="absa-customer-adjustedDebitInterestAccrued"
                name="adjustedDebitInterestAccrued"
                data-cy="adjustedDebitInterestAccrued"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.projectedTaxOnAccruedInterestAmount'
                )}
                id="absa-customer-projectedTaxOnAccruedInterestAmount"
                name="projectedTaxOnAccruedInterestAmount"
                data-cy="projectedTaxOnAccruedInterestAmount"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.interestAccruedInCurrentFinancialYear'
                )}
                id="absa-customer-interestAccruedInCurrentFinancialYear"
                name="interestAccruedInCurrentFinancialYear"
                data-cy="interestAccruedInCurrentFinancialYear"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.issuedInventoryPropertyType'
                )}
                id="absa-customer-issuedInventoryPropertyType"
                name="issuedInventoryPropertyType"
                data-cy="issuedInventoryPropertyType"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.lastIssuedCheckNumber'
                )}
                id="absa-customer-lastIssuedCheckNumber"
                name="lastIssuedCheckNumber"
                data-cy="lastIssuedCheckNumber"
                type="text"
              />
              <ValidatedField
                label={translate('absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.languageCode')}
                id="absa-customer-languageCode"
                name="languageCode"
                data-cy="languageCode"
                type="select"
              >
                {languageCodeValues.map(languageCode => (
                  <option value={languageCode} key={languageCode}>
                    {translate('absaUgdtMicrosrvcCustomerAccountSvcApp.LanguageCode.' + languageCode)}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label={translate('absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.lineNumber')}
                id="absa-customer-lineNumber"
                name="lineNumber"
                data-cy="lineNumber"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.minimumRequiredBalanceAmount'
                )}
                id="absa-customer-minimumRequiredBalanceAmount"
                name="minimumRequiredBalanceAmount"
                data-cy="minimumRequiredBalanceAmount"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.minimumRequiredTradingBalanceAmount'
                )}
                id="absa-customer-minimumRequiredTradingBalanceAmount"
                name="minimumRequiredTradingBalanceAmount"
                data-cy="minimumRequiredTradingBalanceAmount"
                type="text"
              />
              <ValidatedField
                label={translate('absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.mtdCreditsCount')}
                id="absa-customer-mtdCreditsCount"
                name="mtdCreditsCount"
                data-cy="mtdCreditsCount"
                type="text"
              />
              <ValidatedField
                label={translate('absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.mtdDebitsCount')}
                id="absa-customer-mtdDebitsCount"
                name="mtdDebitsCount"
                data-cy="mtdDebitsCount"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.netAvailableBalanceForWithdrawal'
                )}
                id="absa-customer-netAvailableBalanceForWithdrawal"
                name="netAvailableBalanceForWithdrawal"
                data-cy="netAvailableBalanceForWithdrawal"
                type="text"
              />
              <ValidatedField
                label={translate('absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.netBalanceAmount')}
                id="absa-customer-netBalanceAmount"
                name="netBalanceAmount"
                data-cy="netBalanceAmount"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.passbookLifecycleStatusCode'
                )}
                id="absa-customer-passbookLifecycleStatusCode"
                name="passbookLifecycleStatusCode"
                data-cy="passbookLifecycleStatusCode"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.periodicAverageBalanceAmount'
                )}
                id="absa-customer-periodicAverageBalanceAmount"
                name="periodicAverageBalanceAmount"
                data-cy="periodicAverageBalanceAmount"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.previousDayClosingBookBalance'
                )}
                id="absa-customer-previousDayClosingBookBalance"
                name="previousDayClosingBookBalance"
                data-cy="previousDayClosingBookBalance"
                type="text"
              />
              <ValidatedField
                label={translate('absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.productCode')}
                id="absa-customer-productCode"
                name="productCode"
                data-cy="productCode"
                type="text"
              />
              <ValidatedField
                label={translate('absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.productName')}
                id="absa-customer-productName"
                name="productName"
                data-cy="productName"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.restrictedAccountFlag'
                )}
                id="absa-customer-restrictedAccountFlag"
                name="restrictedAccountFlag"
                data-cy="restrictedAccountFlag"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate('absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.staffFlag')}
                id="absa-customer-staffFlag"
                name="staffFlag"
                data-cy="staffFlag"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.sweepinAmountOnLien'
                )}
                id="absa-customer-sweepinAmountOnLien"
                name="sweepinAmountOnLien"
                data-cy="sweepinAmountOnLien"
                type="text"
              />
              <ValidatedField
                label={translate('absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.taxCode1')}
                id="absa-customer-taxCode1"
                name="taxCode1"
                data-cy="taxCode1"
                type="text"
              />
              <ValidatedField
                label={translate('absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.taxCode2')}
                id="absa-customer-taxCode2"
                name="taxCode2"
                data-cy="taxCode2"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.tdsExemptionLimitAmount1'
                )}
                id="absa-customer-tdsExemptionLimitAmount1"
                name="tdsExemptionLimitAmount1"
                data-cy="tdsExemptionLimitAmount1"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.tdsExemptionLimitAmount2'
                )}
                id="absa-customer-tdsExemptionLimitAmount2"
                name="tdsExemptionLimitAmount2"
                data-cy="tdsExemptionLimitAmount2"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.totalCASAHoldAmount'
                )}
                id="absa-customer-totalCASAHoldAmount"
                name="totalCASAHoldAmount"
                data-cy="totalCASAHoldAmount"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.totalUnclearFundAmount'
                )}
                id="absa-customer-totalUnclearFundAmount"
                name="totalUnclearFundAmount"
                data-cy="totalUnclearFundAmount"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.ytdCreditLastAmount'
                )}
                id="absa-customer-ytdCreditLastAmount"
                name="ytdCreditLastAmount"
                data-cy="ytdCreditLastAmount"
                type="text"
              />
              <ValidatedField
                label={translate('absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.ytdCreditsCount')}
                id="absa-customer-ytdCreditsCount"
                name="ytdCreditsCount"
                data-cy="ytdCreditsCount"
                type="text"
              />
              <ValidatedField
                label={translate('absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.ytdDebitsCount')}
                id="absa-customer-ytdDebitsCount"
                name="ytdDebitsCount"
                data-cy="ytdDebitsCount"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.ytdDebitsLastAmount'
                )}
                id="absa-customer-ytdDebitsLastAmount"
                name="ytdDebitsLastAmount"
                data-cy="ytdDebitsLastAmount"
                type="text"
              />
              <ValidatedField
                label={translate('absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.message')}
                id="absa-customer-message"
                name="message"
                data-cy="message"
                type="text"
              />
              <ValidatedField
                label={translate('absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.sourceInfo')}
                id="absa-customer-sourceInfo"
                name="sourceInfo"
                data-cy="sourceInfo"
                type="text"
              />
              <ValidatedField
                label={translate('absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.status')}
                id="absa-customer-status"
                name="status"
                data-cy="status"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField1'
                )}
                id="absa-customer-custFreeTextField1"
                name="custFreeTextField1"
                data-cy="custFreeTextField1"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField2'
                )}
                id="absa-customer-custFreeTextField2"
                name="custFreeTextField2"
                data-cy="custFreeTextField2"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField3'
                )}
                id="absa-customer-custFreeTextField3"
                name="custFreeTextField3"
                data-cy="custFreeTextField3"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField4'
                )}
                id="absa-customer-custFreeTextField4"
                name="custFreeTextField4"
                data-cy="custFreeTextField4"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField5'
                )}
                id="absa-customer-custFreeTextField5"
                name="custFreeTextField5"
                data-cy="custFreeTextField5"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField6'
                )}
                id="absa-customer-custFreeTextField6"
                name="custFreeTextField6"
                data-cy="custFreeTextField6"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField7'
                )}
                id="absa-customer-custFreeTextField7"
                name="custFreeTextField7"
                data-cy="custFreeTextField7"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField8'
                )}
                id="absa-customer-custFreeTextField8"
                name="custFreeTextField8"
                data-cy="custFreeTextField8"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField9'
                )}
                id="absa-customer-custFreeTextField9"
                name="custFreeTextField9"
                data-cy="custFreeTextField9"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField10'
                )}
                id="absa-customer-custFreeTextField10"
                name="custFreeTextField10"
                data-cy="custFreeTextField10"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField11'
                )}
                id="absa-customer-custFreeTextField11"
                name="custFreeTextField11"
                data-cy="custFreeTextField11"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField12'
                )}
                id="absa-customer-custFreeTextField12"
                name="custFreeTextField12"
                data-cy="custFreeTextField12"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField13'
                )}
                id="absa-customer-custFreeTextField13"
                name="custFreeTextField13"
                data-cy="custFreeTextField13"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField14'
                )}
                id="absa-customer-custFreeTextField14"
                name="custFreeTextField14"
                data-cy="custFreeTextField14"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField15'
                )}
                id="absa-customer-custFreeTextField15"
                name="custFreeTextField15"
                data-cy="custFreeTextField15"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField16'
                )}
                id="absa-customer-custFreeTextField16"
                name="custFreeTextField16"
                data-cy="custFreeTextField16"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField17'
                )}
                id="absa-customer-custFreeTextField17"
                name="custFreeTextField17"
                data-cy="custFreeTextField17"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField18'
                )}
                id="absa-customer-custFreeTextField18"
                name="custFreeTextField18"
                data-cy="custFreeTextField18"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField19'
                )}
                id="absa-customer-custFreeTextField19"
                name="custFreeTextField19"
                data-cy="custFreeTextField19"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField20'
                )}
                id="absa-customer-custFreeTextField20"
                name="custFreeTextField20"
                data-cy="custFreeTextField20"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField21'
                )}
                id="absa-customer-custFreeTextField21"
                name="custFreeTextField21"
                data-cy="custFreeTextField21"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField22'
                )}
                id="absa-customer-custFreeTextField22"
                name="custFreeTextField22"
                data-cy="custFreeTextField22"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField23'
                )}
                id="absa-customer-custFreeTextField23"
                name="custFreeTextField23"
                data-cy="custFreeTextField23"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField24'
                )}
                id="absa-customer-custFreeTextField24"
                name="custFreeTextField24"
                data-cy="custFreeTextField24"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField25'
                )}
                id="absa-customer-custFreeTextField25"
                name="custFreeTextField25"
                data-cy="custFreeTextField25"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField26'
                )}
                id="absa-customer-custFreeTextField26"
                name="custFreeTextField26"
                data-cy="custFreeTextField26"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField27'
                )}
                id="absa-customer-custFreeTextField27"
                name="custFreeTextField27"
                data-cy="custFreeTextField27"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField28'
                )}
                id="absa-customer-custFreeTextField28"
                name="custFreeTextField28"
                data-cy="custFreeTextField28"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField29'
                )}
                id="absa-customer-custFreeTextField29"
                name="custFreeTextField29"
                data-cy="custFreeTextField29"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField30'
                )}
                id="absa-customer-custFreeTextField30"
                name="custFreeTextField30"
                data-cy="custFreeTextField30"
                type="text"
              />
              <ValidatedField
                label={translate(
                  'absaUgdtMicrosrvcCustomerAccountSvcApp.absaUgdtMicrosrvcCustomerAccountSvcAbsaCustomer.custFreeTextField31'
                )}
                id="absa-customer-custFreeTextField31"
                name="custFreeTextField31"
                data-cy="custFreeTextField31"
                type="text"
              />
              <Button
                tag={Link}
                id="cancel-save"
                data-cy="entityCreateCancelButton"
                to="/absaugdtmicrosrvccustomeraccountsvc/absa-customer"
                replace
                color="info"
              >
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default AbsaCustomerUpdate;
