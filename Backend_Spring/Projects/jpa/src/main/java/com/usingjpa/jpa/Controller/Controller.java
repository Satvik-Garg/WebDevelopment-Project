package com.usingjpa.jpa.Controller;

import java.util.List;

// import org.hibernate.mapping.List;

// import java.util.List;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.usingjpa.jpa.Project;
// import com.usingjpa.jpa.Services.ProjectServices;
import com.usingjpa.jpa.Services.ProjectServices;

@RestController
@RequestMapping("/project")
public class Controller{
  @Autowired  
  private ProjectServices services;

    @GetMapping("/getallprojects")
    public List<Project> getAllProjects(){

        return services.getProjects(); 
    }

    @PostMapping("/create")
    public Project createProject( @RequestBody Project proj){
return services.createProject(proj);
    }
    


}