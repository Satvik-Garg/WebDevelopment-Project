package com.usingjpa.jpa;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

// Entity Class
@Entity
@Table(name="Projects")
public class Project {
  
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    private int id;
    @Column(name="Name")
    private String name;


@Column
private String Github;

    public String getGithub() {
    return Github;
}

public Project(int id, String name, String Github) {
        this.id = id;
        this.name = name;
        this.Github = Github;
    }

public void setGithub(String github) {
    Github = github;
}

    public Project(){
  
    }
    // public Project(String name, String email) {
    //         this.name = name;
    //         this.Github = email;
        
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    // public String getEmail() {
    //     return email;
    // }
    // public void setEmail(String email) {
    //     this.email = email;
    // }

        



}
