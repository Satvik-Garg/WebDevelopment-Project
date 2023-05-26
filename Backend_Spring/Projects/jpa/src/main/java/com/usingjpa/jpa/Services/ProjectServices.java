package com.usingjpa.jpa.Services;

import java.util.List;

import com.usingjpa.jpa.Project;

public interface ProjectServices {
    public List<Project> getProjects();
    public Project getProjectById(int id);
    public Project createProject(Project Proj);
}
