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
    @Column(name="Description")
    private String Description;
    @Column(name="likes")
    private int likes;
    @Column(name="Image")
    private String Image;
public Project(int id, String name, String description, int likes, String image, String github) {
        this.id = id;
        this.name = name;
        Description = description;
        this.likes = likes;
        Image = image;
        Github = github;
    }
public String getDescription() {
    return Description;
}

public void setDescription(String description) {
    Description = description;
}

public int getLikes() {
    return likes;
}

public void setLikes(int likes) {
    this.likes = likes;
}

public String getImage() {
    return Image;
}

public void setImage(String image) {
    Image = image;
}
@Column(name="Github")
private String Github;

    public String getGithub() {
    return Github;
}

// public Project(int id, String name, String Github) {
//         this.id = id;
//         this.name = name;
//         this.Github = Github;

//     }

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
