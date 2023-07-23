package ug.co.absa.microsrvc.customeraccountsvc.web.rest;



import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import io.micrometer.common.util.StringUtils;
import jakarta.inject.Inject;
import org.eclipse.microprofile.config.Config;
import org.eclipse.microprofile.faulttolerance.Fallback;
import org.eclipse.microprofile.faulttolerance.Timeout;
import org.eclipse.microprofile.faulttolerance.exceptions.TimeoutException;
import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.media.Content;
import org.eclipse.microprofile.openapi.annotations.media.Schema;
import org.eclipse.microprofile.openapi.annotations.parameters.RequestBody;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponses;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import ug.co.absa.microsrvc.customeraccountsvc.domain.inquiry.thirdparty.request.ValidationInBoundRequest;
import ug.co.absa.microsrvc.customeraccountsvc.service.IAccountInquiryService;
import ug.co.absa.microsrvc.customeraccountsvc.util.AccountInquiryConstants;


@Path("/customer")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Tag(name = "Account Enquiry For Credit Card System FV Resources")
public class AccountInquiryController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AccountInquiryController.class);


    @Inject
    Config config;

    @Inject
    IAccountInquiryService accountInquiryService;

    @POST
    @Path("/inquiry")
    @Timeout
    @Fallback(fallbackMethod = AccountInquiryConstants.FALLBACK_METHOD_FOR_ACCOUNT_INQUIRY, applyOn = { TimeoutException.class })
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    @Tag(name = AccountInquiryConstants.TAG_ACCOUNT_INQUIRY)
    @Operation(summary = AccountInquiryConstants.OPENAPI_DESC_ACCOUNT_INQUIRY, description = AccountInquiryConstants.OPENAPI_DESC_ACCOUNT_INQUIRY)
    @APIResponses(value = {
        @APIResponse(responseCode = AccountInquiryConstants.SUCCESS_CODE, description = AccountInquiryConstants.SUCCESS_MSG, content = @Content(mediaType = MediaType.APPLICATION_JSON, schema = @Schema(implementation = AccountInquiryOutBountRes.class))),
        @APIResponse(responseCode = AccountInquiryConstants.BAD_REQUEST_CODE, description = AccountInquiryConstants.BAD_REQUEST, content = @Content(mediaType = MediaType.APPLICATION_JSON, schema = @Schema(implementation = ResponseEntity.class))),
        @APIResponse(responseCode = AccountInquiryConstants.INTERNAL_ERROR_CODE, description = AccountInquiryConstants.INTERNAL_ERROR_DESC, content = @Content(mediaType = MediaType.APPLICATION_JSON, schema = @Schema(implementation = ResponseEntity.class))),
        @APIResponse(responseCode = AccountInquiryConstants.SOR_UNAVAILABLE_CODE, description = AccountInquiryConstants.SOR_UNAVAILABLE_MSG, content = @Content(mediaType = MediaType.APPLICATION_JSON, schema = @Schema(implementation = ResponseEntity.class))),
        @APIResponse(responseCode = AccountInquiryConstants.TIMEOUT_CODE, description = AccountInquiryConstants.GATEWAY_TIMEOUT, content = @Content(mediaType = MediaType.APPLICATION_JSON, schema = @Schema(implementation = ResponseEntity.class))) })
    public Response accountInquiry(@RequestBody ValidationInBoundRequest validationInquiryRequest) {
        final String METHOD_NAME = "accountInquiry";
       // LOGGER.info(METHOD_NAME, apiRequestHeader.getConsumerUniqueReferenceId(),
        if(StringUtils.isNotEmpty(validationInquiryRequest.getAccountNumber()))
            AccountInquiryConstants.INSIDE_CONTROLLER, AccountInquiryConstants.REQUEST_STARTS);

        ResponseEntity<AccountInquiryOutBountRes> response = accountInquiryService.accountInquiryService(validationInquiryRequest);
        return Response.ok(response).build();
    }

    public Response fallbackForAccountInquiry(ValidationInBoundRequest validationInBoundRequest) {
        final String METHOD_NAME = AccountInquiryConstants.FALLBACK_METHOD_FOR_ACCOUNT_INQUIRY;
        LOGGER.info(METHOD_NAME, AccountInquiryConstants.REQUEST_STARTS);


        return Response.ok().build();

    }

}
