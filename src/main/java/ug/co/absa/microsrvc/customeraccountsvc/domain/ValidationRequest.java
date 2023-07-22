package ug.co.absa.microsrvc.customeraccountsvc.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

public class ValidationRequest {
    private String accountNumber;
    private  String transactionId;

    private  String paymentCode;
}
