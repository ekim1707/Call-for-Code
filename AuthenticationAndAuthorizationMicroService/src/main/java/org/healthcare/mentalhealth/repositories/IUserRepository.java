package org.healthcare.mentalhealth.repositories;

import org.healthcare.mentalhealth.models.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserRepository extends JpaRepository<Patient, Long> {
    Patient findUserByEmail(String email);
}
