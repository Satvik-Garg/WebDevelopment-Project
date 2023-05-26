package com.usingjpa.jpa.Services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.usingjpa.jpa.Project;
import com.usingjpa.jpa.Repository.ProjectRepository;
@Service
public class ProjectServicesImpl implements ProjectServices {

@Autowired
    private ProjectRepository projectRepository;
//   public  List<Project> list;

    
//     public ProjectServicesImpl(List<Project> list) {
//        list = new ArrayList<Project>();
//        list.add(new Project(1,"Project1","Github"));
        
       
//     }

public Project createProject(Project Proj){
    return projectRepository.save(Proj);
}


    @Override
    public List<Project> getProjects() {

        return projectRepository.findAll();
        // TODO Auto-generated method stub
        // throw new UnsupportedOperationException("Unimplemented method 'getProjects'");
    }


    @Override
    public Project getProjectById(int id) {


        return projectRepository.getOne(id);
        
    
}
}
