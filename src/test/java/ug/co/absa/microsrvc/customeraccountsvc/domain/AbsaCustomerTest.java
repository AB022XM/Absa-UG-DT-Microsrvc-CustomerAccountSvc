package ug.co.absa.microsrvc.customeraccountsvc.domain;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import ug.co.absa.microsrvc.customeraccountsvc.web.rest.TestUtil;

class AbsaCustomerTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(AbsaCustomer.class);
        AbsaCustomer absaCustomer1 = new AbsaCustomer();
        absaCustomer1.setId(1L);
        AbsaCustomer absaCustomer2 = new AbsaCustomer();
        absaCustomer2.setId(absaCustomer1.getId());
        assertThat(absaCustomer1).isEqualTo(absaCustomer2);
        absaCustomer2.setId(2L);
        assertThat(absaCustomer1).isNotEqualTo(absaCustomer2);
        absaCustomer1.setId(null);
        assertThat(absaCustomer1).isNotEqualTo(absaCustomer2);
    }
}
