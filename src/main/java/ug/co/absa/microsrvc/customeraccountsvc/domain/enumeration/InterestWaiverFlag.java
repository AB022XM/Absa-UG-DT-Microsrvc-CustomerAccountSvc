package ug.co.absa.microsrvc.customeraccountsvc.domain.enumeration;

/**
 * The InterestWaiverFlag enumeration.
 */
public enum InterestWaiverFlag {
    NO_INTEREST_WAIVER("0"),
    INTEREST_WAIVER("1");

    private final String value;

    InterestWaiverFlag(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
