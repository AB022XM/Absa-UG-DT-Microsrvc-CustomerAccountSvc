import {
  entityTableSelector,
  entityDetailsButtonSelector,
  entityDetailsBackButtonSelector,
  entityCreateButtonSelector,
  entityCreateSaveButtonSelector,
  entityCreateCancelButtonSelector,
  entityEditButtonSelector,
  entityDeleteButtonSelector,
  entityConfirmDeleteButtonSelector,
} from '../../support/entity';

describe('AbsaCustomer e2e test', () => {
  const absaCustomerPageUrl = '/absaugdtmicrosrvccustomeraccountsvc/absa-customer';
  const absaCustomerPageUrlPattern = new RegExp('/absaugdtmicrosrvccustomeraccountsvc/absa-customer(\\?.*)?$');
  const username = Cypress.env('E2E_USERNAME') ?? 'user';
  const password = Cypress.env('E2E_PASSWORD') ?? 'user';
  const absaCustomerSample = {};

  let absaCustomer;

  beforeEach(() => {
    cy.login(username, password);
  });

  beforeEach(() => {
    cy.intercept('GET', '/services/absaugdtmicrosrvccustomeraccountsvc/api/absa-customers+(?*|)').as('entitiesRequest');
    cy.intercept('POST', '/services/absaugdtmicrosrvccustomeraccountsvc/api/absa-customers').as('postEntityRequest');
    cy.intercept('DELETE', '/services/absaugdtmicrosrvccustomeraccountsvc/api/absa-customers/*').as('deleteEntityRequest');
  });

  afterEach(() => {
    if (absaCustomer) {
      cy.authenticatedRequest({
        method: 'DELETE',
        url: `/services/absaugdtmicrosrvccustomeraccountsvc/api/absa-customers/${absaCustomer.id}`,
      }).then(() => {
        absaCustomer = undefined;
      });
    }
  });

  it('AbsaCustomers menu should load AbsaCustomers page', () => {
    cy.visit('/');
    cy.clickOnEntityMenuItem('absaugdtmicrosrvccustomeraccountsvc/absa-customer');
    cy.wait('@entitiesRequest').then(({ response }) => {
      if (response.body.length === 0) {
        cy.get(entityTableSelector).should('not.exist');
      } else {
        cy.get(entityTableSelector).should('exist');
      }
    });
    cy.getEntityHeading('AbsaCustomer').should('exist');
    cy.url().should('match', absaCustomerPageUrlPattern);
  });

  describe('AbsaCustomer page', () => {
    describe('create button click', () => {
      beforeEach(() => {
        cy.visit(absaCustomerPageUrl);
        cy.wait('@entitiesRequest');
      });

      it('should load create AbsaCustomer page', () => {
        cy.get(entityCreateButtonSelector).click();
        cy.url().should('match', new RegExp('/absaugdtmicrosrvccustomeraccountsvc/absa-customer/new$'));
        cy.getEntityCreateUpdateHeading('AbsaCustomer');
        cy.get(entityCreateSaveButtonSelector).should('exist');
        cy.get(entityCreateCancelButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', absaCustomerPageUrlPattern);
      });
    });

    describe('with existing value', () => {
      beforeEach(() => {
        cy.authenticatedRequest({
          method: 'POST',
          url: '/services/absaugdtmicrosrvccustomeraccountsvc/api/absa-customers',
          body: absaCustomerSample,
        }).then(({ body }) => {
          absaCustomer = body;

          cy.intercept(
            {
              method: 'GET',
              url: '/services/absaugdtmicrosrvccustomeraccountsvc/api/absa-customers+(?*|)',
              times: 1,
            },
            {
              statusCode: 200,
              body: [absaCustomer],
            }
          ).as('entitiesRequestInternal');
        });

        cy.visit(absaCustomerPageUrl);

        cy.wait('@entitiesRequestInternal');
      });

      it('detail button click should load details AbsaCustomer page', () => {
        cy.get(entityDetailsButtonSelector).first().click();
        cy.getEntityDetailsHeading('absaCustomer');
        cy.get(entityDetailsBackButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', absaCustomerPageUrlPattern);
      });

      it('edit button click should load edit AbsaCustomer page and go back', () => {
        cy.get(entityEditButtonSelector).first().click();
        cy.getEntityCreateUpdateHeading('AbsaCustomer');
        cy.get(entityCreateSaveButtonSelector).should('exist');
        cy.get(entityCreateCancelButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', absaCustomerPageUrlPattern);
      });

      it('edit button click should load edit AbsaCustomer page and save', () => {
        cy.get(entityEditButtonSelector).first().click();
        cy.getEntityCreateUpdateHeading('AbsaCustomer');
        cy.get(entityCreateSaveButtonSelector).click();
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', absaCustomerPageUrlPattern);
      });

      it('last delete button click should delete instance of AbsaCustomer', () => {
        cy.intercept('GET', '/services/absaugdtmicrosrvccustomeraccountsvc/api/absa-customers/*').as('dialogDeleteRequest');
        cy.get(entityDeleteButtonSelector).last().click();
        cy.wait('@dialogDeleteRequest');
        cy.getEntityDeleteDialogHeading('absaCustomer').should('exist');
        cy.get(entityConfirmDeleteButtonSelector).click();
        cy.wait('@deleteEntityRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(204);
        });
        cy.wait('@entitiesRequest').then(({ response }) => {
          expect(response.statusCode).to.equal(200);
        });
        cy.url().should('match', absaCustomerPageUrlPattern);

        absaCustomer = undefined;
      });
    });
  });

  describe('new AbsaCustomer page', () => {
    beforeEach(() => {
      cy.visit(`${absaCustomerPageUrl}`);
      cy.get(entityCreateButtonSelector).click();
      cy.getEntityCreateUpdateHeading('AbsaCustomer');
    });

    it('should create an instance of AbsaCustomer', () => {
      cy.get(`[data-cy="accountCurrency"]`).type('connect pricing').should('have.value', 'connect pricing');

      cy.get(`[data-cy="accountNumber"]`).type('intuitive Liaison').should('have.value', 'intuitive Liaison');

      cy.get(`[data-cy="accountStatus"]`).select('Active');

      cy.get(`[data-cy="accountLifecycleStatusCode"]`).select('ACTIVE');

      cy.get(`[data-cy="accrualStatusCode"]`).type('Generic Georgia').should('have.value', 'Generic Georgia');

      cy.get(`[data-cy="casaAccountStatus"]`).select('ACTIVE');

      cy.get(`[data-cy="minorAccountStatusCode"]`).select('MAJOR');

      cy.get(`[data-cy="accountTitle"]`).type('Investor incremental').should('have.value', 'Investor incremental');

      cy.get(`[data-cy="advanceAgainstUnclearedFunds"]`).type('68297').should('have.value', '68297');

      cy.get(`[data-cy="adHocStatementFlag"]`).should('not.be.checked');
      cy.get(`[data-cy="adHocStatementFlag"]`).click().should('be.checked');

      cy.get(`[data-cy="additionalAddressFlag"]`).should('not.be.checked');
      cy.get(`[data-cy="additionalAddressFlag"]`).click().should('be.checked');

      cy.get(`[data-cy="atmFacilityFlag"]`).should('not.be.checked');
      cy.get(`[data-cy="atmFacilityFlag"]`).click().should('be.checked');

      cy.get(`[data-cy="checkReorderThresholdNumber"]`).type('25086').should('have.value', '25086');

      cy.get(`[data-cy="deferredStmtGenerationDayOfMonth"]`).type('63022').should('have.value', '63022');

      cy.get(`[data-cy="generateRateChangeIntimationFlag"]`).should('not.be.checked');
      cy.get(`[data-cy="generateRateChangeIntimationFlag"]`).click().should('be.checked');

      cy.get(`[data-cy="groupBonusInteresFlag"]`).select('Y');

      cy.get(`[data-cy="holdMailFlag"]`).select('ON_HOLD');

      cy.get(`[data-cy="interestWaiverFlag"]`).select('INTEREST_WAIVER');

      cy.get(`[data-cy="internetBankingAccessFlag"]`).should('not.be.checked');
      cy.get(`[data-cy="internetBankingAccessFlag"]`).click().should('be.checked');

      cy.get(`[data-cy="inwardDirectDebitAuthorizationFlag"]`).should('not.be.checked');
      cy.get(`[data-cy="inwardDirectDebitAuthorizationFlag"]`).click().should('be.checked');

      cy.get(`[data-cy="jointAccountFlag"]`).should('not.be.checked');
      cy.get(`[data-cy="jointAccountFlag"]`).click().should('be.checked');

      cy.get(`[data-cy="leadDaysIntimation"]`).should('not.be.checked');
      cy.get(`[data-cy="leadDaysIntimation"]`).click().should('be.checked');

      cy.get(`[data-cy="mailAddressControlFlag"]`).should('not.be.checked');
      cy.get(`[data-cy="mailAddressControlFlag"]`).click().should('be.checked');

      cy.get(`[data-cy="mobileFacilityFlag"]`).should('not.be.checked');
      cy.get(`[data-cy="mobileFacilityFlag"]`).click().should('be.checked');

      cy.get(`[data-cy="numberOfCheckWithdrawals"]`).type('56727').should('have.value', '56727');

      cy.get(`[data-cy="numberOfPastDueChecks"]`).type('60648').should('have.value', '60648');

      cy.get(`[data-cy="numberOfStatementCopies"]`).type('20742').should('have.value', '20742');

      cy.get(`[data-cy="overdraftLimitAmount"]`).type('80704').should('have.value', '80704');

      cy.get(`[data-cy="pointOfSaleFacilityFlag"]`).should('not.be.checked');
      cy.get(`[data-cy="pointOfSaleFacilityFlag"]`).click().should('be.checked');

      cy.get(`[data-cy="standingInstructionFlag"]`).should('not.be.checked');
      cy.get(`[data-cy="standingInstructionFlag"]`).click().should('be.checked');

      cy.get(`[data-cy="sweepoutInstructionFlag"]`).should('not.be.checked');
      cy.get(`[data-cy="sweepoutInstructionFlag"]`).click().should('be.checked');

      cy.get(`[data-cy="availableBalance"]`).type('79858').should('have.value', '79858');

      cy.get(`[data-cy="branchCode"]`).type('69085').should('have.value', '69085');

      cy.get(`[data-cy="branchName"]`).type('Health').should('have.value', 'Health');

      cy.get(`[data-cy="branchShortName"]`).type('Engineer cross-media').should('have.value', 'Engineer cross-media');

      cy.get(`[data-cy="creditsMonthTillDateAmount"]`).type('93259').should('have.value', '93259');

      cy.get(`[data-cy="currentBalance"]`).type('52771').should('have.value', '52771');

      cy.get(`[data-cy="customerNumber"]`).type('Home Kansas Producer').should('have.value', 'Home Kansas Producer');

      cy.get(`[data-cy="isAbsaCustomer"]`).should('not.be.checked');
      cy.get(`[data-cy="isAbsaCustomer"]`).click().should('be.checked');

      cy.get(`[data-cy="fullName"]`).type('green Rest Plaza').should('have.value', 'green Rest Plaza');

      cy.get(`[data-cy="accountOpeningDate"]`).type('2023-07-21T02:39').blur().should('have.value', '2023-07-21T02:39');

      cy.get(`[data-cy="statementPeriodStartDate"]`).type('2023-07-20T21:49').blur().should('have.value', '2023-07-20T21:49');

      cy.get(`[data-cy="statementPeriodEndDate"]`).type('2023-07-21T07:46').blur().should('have.value', '2023-07-21T07:46');

      cy.get(`[data-cy="debitsLastDate"]`).type('2023-07-21T10:58').blur().should('have.value', '2023-07-21T10:58');

      cy.get(`[data-cy="creditLastDate"]`).type('2023-07-20T20:42').blur().should('have.value', '2023-07-20T20:42');

      cy.get(`[data-cy="debitsMonthTillDateAmount"]`).type('2023-07-21T06:47').blur().should('have.value', '2023-07-21T06:47');

      cy.get(`[data-cy="debitsYearTillDateAmount"]`).type('22137').should('have.value', '22137');

      cy.get(`[data-cy="creditInterestAccruedAmount"]`).type('59050').should('have.value', '59050');

      cy.get(`[data-cy="debitInterestAccruedAmount"]`).type('3481').should('have.value', '3481');

      cy.get(`[data-cy="adjustedCreditInterestAccrued"]`).type('12931').should('have.value', '12931');

      cy.get(`[data-cy="adjustedDebitInterestAccrued"]`).type('69454').should('have.value', '69454');

      cy.get(`[data-cy="projectedTaxOnAccruedInterestAmount"]`).type('63265').should('have.value', '63265');

      cy.get(`[data-cy="interestAccruedInCurrentFinancialYear"]`).type('40064').should('have.value', '40064');

      cy.get(`[data-cy="issuedInventoryPropertyType"]`).type('engineer payment Metal').should('have.value', 'engineer payment Metal');

      cy.get(`[data-cy="lastIssuedCheckNumber"]`).type('3145').should('have.value', '3145');

      cy.get(`[data-cy="languageCode"]`).select('English');

      cy.get(`[data-cy="lineNumber"]`).type('84146').should('have.value', '84146');

      cy.get(`[data-cy="minimumRequiredBalanceAmount"]`).type('56455').should('have.value', '56455');

      cy.get(`[data-cy="minimumRequiredTradingBalanceAmount"]`).type('67416').should('have.value', '67416');

      cy.get(`[data-cy="mtdCreditsCount"]`).type('99915').should('have.value', '99915');

      cy.get(`[data-cy="mtdDebitsCount"]`).type('7005').should('have.value', '7005');

      cy.get(`[data-cy="netAvailableBalanceForWithdrawal"]`).type('42002').should('have.value', '42002');

      cy.get(`[data-cy="netBalanceAmount"]`).type('11367').should('have.value', '11367');

      cy.get(`[data-cy="passbookLifecycleStatusCode"]`).type('50438').should('have.value', '50438');

      cy.get(`[data-cy="periodicAverageBalanceAmount"]`).type('22894').should('have.value', '22894');

      cy.get(`[data-cy="previousDayClosingBookBalance"]`).type('43239').should('have.value', '43239');

      cy.get(`[data-cy="productCode"]`).type('56058').should('have.value', '56058');

      cy.get(`[data-cy="productName"]`).type('dedicated archive Representative').should('have.value', 'dedicated archive Representative');

      cy.get(`[data-cy="restrictedAccountFlag"]`).should('not.be.checked');
      cy.get(`[data-cy="restrictedAccountFlag"]`).click().should('be.checked');

      cy.get(`[data-cy="staffFlag"]`).should('not.be.checked');
      cy.get(`[data-cy="staffFlag"]`).click().should('be.checked');

      cy.get(`[data-cy="sweepinAmountOnLien"]`).type('11030').should('have.value', '11030');

      cy.get(`[data-cy="taxCode1"]`).type('85101').should('have.value', '85101');

      cy.get(`[data-cy="taxCode2"]`).type('17894').should('have.value', '17894');

      cy.get(`[data-cy="tdsExemptionLimitAmount1"]`).type('34014').should('have.value', '34014');

      cy.get(`[data-cy="tdsExemptionLimitAmount2"]`).type('17968').should('have.value', '17968');

      cy.get(`[data-cy="totalCASAHoldAmount"]`).type('74340').should('have.value', '74340');

      cy.get(`[data-cy="totalUnclearFundAmount"]`).type('64164').should('have.value', '64164');

      cy.get(`[data-cy="ytdCreditLastAmount"]`).type('95680').should('have.value', '95680');

      cy.get(`[data-cy="ytdCreditsCount"]`).type('2699').should('have.value', '2699');

      cy.get(`[data-cy="ytdDebitsCount"]`).type('19398').should('have.value', '19398');

      cy.get(`[data-cy="ytdDebitsLastAmount"]`).type('86329').should('have.value', '86329');

      cy.get(`[data-cy="message"]`).type('RAM Dollar').should('have.value', 'RAM Dollar');

      cy.get(`[data-cy="sourceInfo"]`).type('blue').should('have.value', 'blue');

      cy.get(`[data-cy="status"]`).type('Home parsing').should('have.value', 'Home parsing');

      cy.get(`[data-cy="custFreeTextField1"]`).type('User-friendly').should('have.value', 'User-friendly');

      cy.get(`[data-cy="custFreeTextField2"]`).type('Computer').should('have.value', 'Computer');

      cy.get(`[data-cy="custFreeTextField3"]`).type('JBOD e-business').should('have.value', 'JBOD e-business');

      cy.get(`[data-cy="custFreeTextField4"]`).type('transmit').should('have.value', 'transmit');

      cy.get(`[data-cy="custFreeTextField5"]`).type('withdrawal neural').should('have.value', 'withdrawal neural');

      cy.get(`[data-cy="custFreeTextField6"]`).type('Won').should('have.value', 'Won');

      cy.get(`[data-cy="custFreeTextField7"]`).type('Berkshire Upgradable Accounts').should('have.value', 'Berkshire Upgradable Accounts');

      cy.get(`[data-cy="custFreeTextField8"]`).type('Nevada Sausages').should('have.value', 'Nevada Sausages');

      cy.get(`[data-cy="custFreeTextField9"]`).type('Analyst').should('have.value', 'Analyst');

      cy.get(`[data-cy="custFreeTextField10"]`).type('Future').should('have.value', 'Future');

      cy.get(`[data-cy="custFreeTextField11"]`).type('Response Shoes').should('have.value', 'Response Shoes');

      cy.get(`[data-cy="custFreeTextField12"]`).type('plum').should('have.value', 'plum');

      cy.get(`[data-cy="custFreeTextField13"]`).type('Borders Account solid').should('have.value', 'Borders Account solid');

      cy.get(`[data-cy="custFreeTextField14"]`).type('Decentralized lime Movies').should('have.value', 'Decentralized lime Movies');

      cy.get(`[data-cy="custFreeTextField15"]`).type('deliverables').should('have.value', 'deliverables');

      cy.get(`[data-cy="custFreeTextField16"]`).type('improvement Administrator').should('have.value', 'improvement Administrator');

      cy.get(`[data-cy="custFreeTextField17"]`).type('synthesize TCP').should('have.value', 'synthesize TCP');

      cy.get(`[data-cy="custFreeTextField18"]`).type('Locks monitor').should('have.value', 'Locks monitor');

      cy.get(`[data-cy="custFreeTextField19"]`).type('indexing Tactics Realigned').should('have.value', 'indexing Tactics Realigned');

      cy.get(`[data-cy="custFreeTextField20"]`).type('cultivate bricks-and-clicks').should('have.value', 'cultivate bricks-and-clicks');

      cy.get(`[data-cy="custFreeTextField21"]`).type('Dinar Oklahoma Nebraska').should('have.value', 'Dinar Oklahoma Nebraska');

      cy.get(`[data-cy="custFreeTextField22"]`).type('Money').should('have.value', 'Money');

      cy.get(`[data-cy="custFreeTextField23"]`).type('Tasty Total Group').should('have.value', 'Tasty Total Group');

      cy.get(`[data-cy="custFreeTextField24"]`).type('Oklahoma Rapids').should('have.value', 'Oklahoma Rapids');

      cy.get(`[data-cy="custFreeTextField25"]`).type('withdrawal Cambridgeshire').should('have.value', 'withdrawal Cambridgeshire');

      cy.get(`[data-cy="custFreeTextField26"]`).type('Towels redundant').should('have.value', 'Towels redundant');

      cy.get(`[data-cy="custFreeTextField27"]`).type('Singapore').should('have.value', 'Singapore');

      cy.get(`[data-cy="custFreeTextField28"]`).type('high-level').should('have.value', 'high-level');

      cy.get(`[data-cy="custFreeTextField29"]`).type('turquoise').should('have.value', 'turquoise');

      cy.get(`[data-cy="custFreeTextField30"]`).type('Pants markets reboot').should('have.value', 'Pants markets reboot');

      cy.get(`[data-cy="custFreeTextField31"]`).type('Forward').should('have.value', 'Forward');

      cy.get(entityCreateSaveButtonSelector).click();

      cy.wait('@postEntityRequest').then(({ response }) => {
        expect(response.statusCode).to.equal(201);
        absaCustomer = response.body;
      });
      cy.wait('@entitiesRequest').then(({ response }) => {
        expect(response.statusCode).to.equal(200);
      });
      cy.url().should('match', absaCustomerPageUrlPattern);
    });
  });
});
