package com.sm5p.studentddemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sm5p.studentddemo.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	 
    User findByUsername(String username);
}