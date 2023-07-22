package ug.co.absa.microsrvc.customeraccountsvc.domain.enumeration;

/**
 * The AccountLifecycleStatusCode enumeration.
 */
public enum AccountLifecycleStatusCode {
    ACTIVE("8");

    private final String value;

    AccountLifecycleStatusCode(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
