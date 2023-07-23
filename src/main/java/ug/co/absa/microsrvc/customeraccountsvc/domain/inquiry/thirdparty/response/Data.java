package ug.co.absa.microsrvc.customeraccountsvc.domain.inquiry.thirdparty.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Data {
  private String accountNumber;
  private String accountType;

  private Boolean isActive;

  private String AccountBalance;

}
