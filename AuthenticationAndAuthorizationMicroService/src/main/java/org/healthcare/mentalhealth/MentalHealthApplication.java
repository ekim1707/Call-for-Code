package org.healthcare.mentalhealth;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories("org.healthcare.mentalhealth.repositories")
@SpringBootApplication(scanBasePackages = {"org.healthcare.mentalhealth.services", "org.healthcare.mentalhealth.util"})
public class MentalHealthApplication {

	public static void main(String[] args) {
		SpringApplication.run(MentalHealthApplication.class, args);
	}

}
