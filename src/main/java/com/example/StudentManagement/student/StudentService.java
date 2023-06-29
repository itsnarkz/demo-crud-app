package com.example.StudentManagement.student;


import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.time.LocalDate;
import java.time.Month;
import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }
    public List<Student> getStudents() {
        return studentRepository.findAll();
    }

    public void addNewStudent(Student student) {
        studentRepository.save(student);
    }

    public void deleteStudent(Long id) {
        boolean exists = studentRepository.existsById(id);
        if(!exists) {
            throw new IllegalStateException("student with id " + id + " does not exist");
        }
        studentRepository.deleteById(id);
    }

    @Transactional
    public void updateStudent(Long id, Student newStudent) {
        Student student = studentRepository.findById(id).orElseThrow(() -> new IllegalStateException(
                "student does not exists"
        ));

        if(newStudent.getName() != null) student.setName(newStudent.getName());
        if(newStudent.getEmail() != null) student.setEmail(newStudent.getEmail());
        if(newStudent.getAge() != 0) student.setAge(newStudent.getAge());
    }
}
//List.of(
//                new Student("ptd", "email", LocalDate.of(2000, Month.APRIL, 29), 10)
//        );