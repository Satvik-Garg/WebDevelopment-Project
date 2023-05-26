package com.usingjpa.jpa.Controller;

import java.util.List;

// import org.hibernate.mapping.List;

// import java.util.List;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.usingjpa.jpa.Project;
import com.usingjpa.jpa.Repository.ProjectRepository;
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
    @GetMapping("/getProject/{id}")
    public Project getProjectById(@PathVariable int id){
            return services.getProjectById(id);
        }
    
    @PutMapping("/updateProject/{id}")
    public Project updateProject( @RequestBody Project pro,
    @PathVariable int id){
      return services.updateProject(pro,id);
    }
    @DeleteMapping("/deleteProject/{id}")
    public void deleteProject(@PathVariable int id){
        services.deleteProject(id);
    }

}