package com.sm5p.studentddemo.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sm5p.studentddemo.model.Student;
import com.sm5p.studentddemo.model.User;
import com.sm5p.studentddemo.repository.StudentRepository;
import com.sm5p.studentddemo.repository.UserRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/public")
public class IndexController {
    
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public User registerUser(@Valid @RequestBody User user) {
    	log.info("register user: ");
    	String encodedPassword = new BCryptPasswordEncoder(11).encode(user.getPassword());
    	user.setPassword(encodedPassword);
        return userRepository.save(user);
    }


}