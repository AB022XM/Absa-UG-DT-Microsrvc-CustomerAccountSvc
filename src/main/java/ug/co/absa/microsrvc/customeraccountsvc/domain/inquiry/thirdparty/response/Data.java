package ug.co.absa.microsrvc.customeraccountsvc.domain.inquiry.thirdparty.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


public class Data {
  private String accountNumber;
  private String accountName;

  private Boolean isActive;

  private String AccountBalance;

    public Data() {
    }

    public Data(String accountNumber, String accountName, Boolean isActive, String accountBalance) {
        this.accountNumber = accountNumber;
        this.accountName = accountName;
        this.isActive = isActive;
        AccountBalance = accountBalance;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public String getAccountName() {
        return accountName;
    }

    public void setAccountName(String accountName) {
        this.accountName = accountName;
    }

    public Boolean getActive() {
        return isActive;
    }

    public void setActive(Boolean active) {
        isActive = active;
    }

    public String getAccountBalance() {
        return AccountBalance;
    }

    public void setAccountBalance(String accountBalance) {
        AccountBalance = accountBalance;
    }
}
