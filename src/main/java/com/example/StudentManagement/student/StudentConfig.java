package com.example.StudentManagement.student;


import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

import static java.time.Month.*;

@Configuration
public class StudentConfig {
    @Bean
    CommandLineRunner commandLineRunner(StudentRepository repository) {
        return args -> {
            Student ptd = new Student(
                    "ptd",
                    "email",
                    18
            );

            Student ptd1 = new Student(
                    "ptd1",
                    "email",
                    20
            );

            repository.saveAll(
                    List.of(ptd, ptd1)
            );
        };
    }
}
