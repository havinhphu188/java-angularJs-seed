package com.sm5p.studentddemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sm5p.studentddemo.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long>{

}