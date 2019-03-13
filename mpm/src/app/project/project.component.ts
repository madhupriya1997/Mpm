import { Component, OnInit } from '@angular/core';
import { List } from '../List';
import { PROJECTS } from '../mProject';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects = PROJECTS;
  selectedProject : List;

  constructor() { }

  ngOnInit() {
  }
  onSelect(project : List): void{
    this.selectedProject = project;
  }

}
