package ug.co.absa.microsrvc.customeraccountsvc.domain;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import lombok.Getter;
import lombok.Setter;
import org.eclipse.microprofile.openapi.annotations.media.Schema;


@Getter
@Setter
@NoArgsConstructor
public class ValidationInBoundRequest {
    @Schema(description = "Mandatory field", pattern = "numeric", minLength = 1, maxLength = 19)
    @NotNull(message = "account.notnullempty.error.message")
    @NotEmpty(message = "account.notnullempty.error.message")
    @Pattern(regexp ="[0-9]{1,19}", message = "account.regex.error.message")
    private String accountNumber;

    @Schema(description = "Mandatory field", pattern = "numeric", minLength = 1, maxLength = 19)
    @NotNull(message = "account.notnullempty.error.message")
    @NotEmpty(message = "account.notnullempty.error.message")
    @Pattern(regexp ="[0-9]{1,19}", message = "account.regex.error.message")
    private  String transactionId;

    @Valid
    private  String paymentCode;
}
