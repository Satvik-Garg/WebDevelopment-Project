package com.usingjpa.jpa.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.usingjpa.jpa.Project;

public interface ProjectRepository extends JpaRepository<Project,Integer> {
    
}
