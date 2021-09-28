import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ProjectDetailsComponent } from './project-details/project-details.component';

export interface Project {
  id: number,
  product_name: string,
  product_type: string,
}

const PROJECTS: Project[] = [
  {
    id: 1,
    product_name: "AWS",
    product_type: "Cloud",
  },
  {
    id: 2,
    product_name: "Flipkart",
    product_type: "e-commerce",
  }

]


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  @ViewChildren(ProjectDetailsComponent) projectDetails;

  product_details = "Product Details"

  toggle : boolean = true
  show : String;
  constructor() { 
    this.show = "yes"
  }
  projects: Project[] = PROJECTS;

  ngOnInit() {
  }

  onClickToggle(){
    this.toggle = !this.toggle;
  }

}
