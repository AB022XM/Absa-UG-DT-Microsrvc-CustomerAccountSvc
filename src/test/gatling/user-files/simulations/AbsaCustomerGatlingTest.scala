import _root_.io.gatling.core.scenario.Simulation
import ch.qos.logback.classic.{Level, LoggerContext}
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import org.slf4j.LoggerFactory

import scala.concurrent.duration._

/**
 * Performance test for the AbsaCustomer entity.
 */
class AbsaCustomerGatlingTest extends Simulation {

    val context: LoggerContext = LoggerFactory.getILoggerFactory.asInstanceOf[LoggerContext]
    // Log all HTTP requests
    //context.getLogger("io.gatling.http").setLevel(Level.valueOf("TRACE"))
    // Log failed HTTP requests
    //context.getLogger("io.gatling.http").setLevel(Level.valueOf("DEBUG"))

    val baseURL = Option(System.getProperty("baseURL")) getOrElse """http://localhost:9065"""

    val httpConf = http
        .baseUrl(baseURL)
        .inferHtmlResources()
        .acceptHeader("*/*")
        .acceptEncodingHeader("gzip, deflate")
        .acceptLanguageHeader("fr,fr-fr;q=0.8,en-us;q=0.5,en;q=0.3")
        .connectionHeader("keep-alive")
        .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:33.0) Gecko/20100101 Firefox/33.0")
        .silentResources // Silence all resources like css or css so they don't clutter the results

    val headers_http = Map(
        "Accept" -> """application/json"""
    )

    val headers_http_authentication = Map(
        "Content-Type" -> """application/json""",
        "Accept" -> """application/json"""
    )

    val headers_http_authenticated = Map(
        "Accept" -> """application/json""",
        "Authorization" -> "${access_token}"
    )

    val scn = scenario("Test the AbsaCustomer entity")
        .exec(http("First unauthenticated request")
        .get("/api/account")
        .headers(headers_http)
        .check(status.is(401))
        ).exitHereIfFailed
        .pause(10)
        .exec(http("Authentication")
        .post("/api/authenticate")
        .headers(headers_http_authentication)
        .body(StringBody("""{"username":"admin", "password":"admin"}""")).asJson
        .check(header("Authorization").saveAs("access_token"))).exitHereIfFailed
        .pause(2)
        .exec(http("Authenticated request")
        .get("/api/account")
        .headers(headers_http_authenticated)
        .check(status.is(200)))
        .pause(10)
        .repeat(2) {
            exec(http("Get all absaCustomers")
            .get("/services/absaugdtmicrosrvccustomeraccountsvc/api/absa-customers")
            .headers(headers_http_authenticated)
            .check(status.is(200)))
            .pause(10 seconds, 20 seconds)
            .exec(http("Create new absaCustomer")
            .post("/services/absaugdtmicrosrvccustomeraccountsvc/api/absa-customers")
            .headers(headers_http_authenticated)
            .body(StringBody("""{
                "accountCurrency":"SAMPLE_TEXT"
                , "accountNumber":"SAMPLE_TEXT"
                , "accountStatus":"Active"
                , "accountLifecycleStatusCode":"ACTIVE"
                , "accrualStatusCode":"SAMPLE_TEXT"
                , "casaAccountStatus":"ACTIVE"
                , "minorAccountStatusCode":"MAJOR"
                , "accountTitle":"SAMPLE_TEXT"
                , "advanceAgainstUnclearedFunds":"0"
                , "adHocStatementFlag":null
                , "additionalAddressFlag":null
                , "atmFacilityFlag":null
                , "checkReorderThresholdNumber":"0"
                , "deferredStmtGenerationDayOfMonth":"0"
                , "generateRateChangeIntimationFlag":null
                , "groupBonusInteresFlag":"N"
                , "holdMailFlag":"ON_HOLD"
                , "interestWaiverFlag":"NO_INTEREST_WAIVER"
                , "internetBankingAccessFlag":null
                , "inwardDirectDebitAuthorizationFlag":null
                , "jointAccountFlag":null
                , "leadDaysIntimation":null
                , "mailAddressControlFlag":null
                , "mobileFacilityFlag":null
                , "numberOfCheckWithdrawals":"0"
                , "numberOfPastDueChecks":"0"
                , "numberOfStatementCopies":"0"
                , "overdraftLimitAmount":"0"
                , "pointOfSaleFacilityFlag":null
                , "standingInstructionFlag":null
                , "sweepoutInstructionFlag":null
                , "availableBalance":"0"
                , "branchCode":"0"
                , "branchName":"SAMPLE_TEXT"
                , "branchShortName":"SAMPLE_TEXT"
                , "creditsMonthTillDateAmount":"0"
                , "currentBalance":"0"
                , "customerNumber":"SAMPLE_TEXT"
                , "isAbsaCustomer":null
                , "fullName":"SAMPLE_TEXT"
                , "accountOpeningDate":"2020-01-01T00:00:00.000Z"
                , "statementPeriodStartDate":"2020-01-01T00:00:00.000Z"
                , "statementPeriodEndDate":"2020-01-01T00:00:00.000Z"
                , "debitsLastDate":"2020-01-01T00:00:00.000Z"
                , "creditLastDate":"2020-01-01T00:00:00.000Z"
                , "debitsMonthTillDateAmount":"2020-01-01T00:00:00.000Z"
                , "debitsYearTillDateAmount":"0"
                , "creditInterestAccruedAmount":"0"
                , "debitInterestAccruedAmount":"0"
                , "adjustedCreditInterestAccrued":"0"
                , "adjustedDebitInterestAccrued":"0"
                , "projectedTaxOnAccruedInterestAmount":"0"
                , "interestAccruedInCurrentFinancialYear":"0"
                , "issuedInventoryPropertyType":"SAMPLE_TEXT"
                , "lastIssuedCheckNumber":"0"
                , "languageCode":"English"
                , "lineNumber":"0"
                , "minimumRequiredBalanceAmount":"0"
                , "minimumRequiredTradingBalanceAmount":"0"
                , "mtdCreditsCount":"0"
                , "mtdDebitsCount":"0"
                , "netAvailableBalanceForWithdrawal":"0"
                , "netBalanceAmount":"0"
                , "passbookLifecycleStatusCode":"0"
                , "periodicAverageBalanceAmount":"0"
                , "previousDayClosingBookBalance":"0"
                , "productCode":"0"
                , "productName":"SAMPLE_TEXT"
                , "restrictedAccountFlag":null
                , "staffFlag":null
                , "sweepinAmountOnLien":"0"
                , "taxCode1":"0"
                , "taxCode2":"0"
                , "tdsExemptionLimitAmount1":"0"
                , "tdsExemptionLimitAmount2":"0"
                , "totalCASAHoldAmount":"0"
                , "totalUnclearFundAmount":"0"
                , "ytdCreditLastAmount":"0"
                , "ytdCreditsCount":"0"
                , "ytdDebitsCount":"0"
                , "ytdDebitsLastAmount":"0"
                , "message":"SAMPLE_TEXT"
                , "sourceInfo":"SAMPLE_TEXT"
                , "status":"SAMPLE_TEXT"
                , "custFreeTextField1":"SAMPLE_TEXT"
                , "custFreeTextField2":"SAMPLE_TEXT"
                , "custFreeTextField3":"SAMPLE_TEXT"
                , "custFreeTextField4":"SAMPLE_TEXT"
                , "custFreeTextField5":"SAMPLE_TEXT"
                , "custFreeTextField6":"SAMPLE_TEXT"
                , "custFreeTextField7":"SAMPLE_TEXT"
                , "custFreeTextField8":"SAMPLE_TEXT"
                , "custFreeTextField9":"SAMPLE_TEXT"
                , "custFreeTextField10":"SAMPLE_TEXT"
                , "custFreeTextField11":"SAMPLE_TEXT"
                , "custFreeTextField12":"SAMPLE_TEXT"
                , "custFreeTextField13":"SAMPLE_TEXT"
                , "custFreeTextField14":"SAMPLE_TEXT"
                , "custFreeTextField15":"SAMPLE_TEXT"
                , "custFreeTextField16":"SAMPLE_TEXT"
                , "custFreeTextField17":"SAMPLE_TEXT"
                , "custFreeTextField18":"SAMPLE_TEXT"
                , "custFreeTextField19":"SAMPLE_TEXT"
                , "custFreeTextField20":"SAMPLE_TEXT"
                , "custFreeTextField21":"SAMPLE_TEXT"
                , "custFreeTextField22":"SAMPLE_TEXT"
                , "custFreeTextField23":"SAMPLE_TEXT"
                , "custFreeTextField24":"SAMPLE_TEXT"
                , "custFreeTextField25":"SAMPLE_TEXT"
                , "custFreeTextField26":"SAMPLE_TEXT"
                , "custFreeTextField27":"SAMPLE_TEXT"
                , "custFreeTextField28":"SAMPLE_TEXT"
                , "custFreeTextField29":"SAMPLE_TEXT"
                , "custFreeTextField30":"SAMPLE_TEXT"
                , "custFreeTextField31":"SAMPLE_TEXT"
                }""")).asJson
            .check(status.is(201))
            .check(headerRegex("Location", "(.*)").saveAs("new_absaCustomer_url"))).exitHereIfFailed
            .pause(10)
            .repeat(5) {
                exec(http("Get created absaCustomer")
                .get("/services/absaugdtmicrosrvccustomeraccountsvc${new_absaCustomer_url}")
                .headers(headers_http_authenticated))
                .pause(10)
            }
            .exec(http("Delete created absaCustomer")
            .delete("/services/absaugdtmicrosrvccustomeraccountsvc${new_absaCustomer_url}")
            .headers(headers_http_authenticated))
            .pause(10)
        }

    val users = scenario("Users").exec(scn)

    setUp(
        users.inject(rampUsers(Integer.getInteger("users", 100)) during (Integer.getInteger("ramp", 1) minutes))
    ).protocols(httpConf)
}
