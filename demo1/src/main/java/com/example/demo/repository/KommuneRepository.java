package com.example.demo.repository;


import com.example.demo.model.Kommune;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface KommuneRepository extends JpaRepository<Kommune, Long> {
    Kommune findByName(String name);
}
