package ug.co.absa.microsrvc.customeraccountsvc.domain.enumeration;

/**
 * The HoldMailFlag enumeration.
 */
public enum HoldMailFlag {
    ON_HOLD("1"),
    OFF_HOLD("0");

    private final String value;

    HoldMailFlag(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
