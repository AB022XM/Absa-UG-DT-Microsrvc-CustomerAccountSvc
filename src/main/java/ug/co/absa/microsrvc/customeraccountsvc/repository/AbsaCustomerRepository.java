package ug.co.absa.microsrvc.customeraccountsvc.repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;
import ug.co.absa.microsrvc.customeraccountsvc.domain.AbsaCustomer;

/**
 * Spring Data JPA repository for the AbsaCustomer entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AbsaCustomerRepository extends JpaRepository<AbsaCustomer, Long> {}
