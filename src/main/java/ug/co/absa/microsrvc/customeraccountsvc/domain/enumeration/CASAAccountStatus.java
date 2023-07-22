package ug.co.absa.microsrvc.customeraccountsvc.domain.enumeration;

/**
 * The CASAAccountStatus enumeration.
 */
public enum CASAAccountStatus {
    ACTIVE("8");

    private final String value;

    CASAAccountStatus(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
