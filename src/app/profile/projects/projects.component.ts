import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  config: any;
  projects = [
    {
      id: 1,
      title: 'Student Management System',
      desc: '',
      // livedemo: 'https://github.com/jainaakash1002/Student-Management-System/#/',
      githurl: 'https://github.com/jainaakash1002/Student-Management-System',
      // mediumlink: 'https://itnext.io/read-data-from-google-spreadsheet-in-angular-209ee74b6cb4',
      imgUrl: 'assets/images/z1.jpeg',
      tech: 'Core Java | Html | CSS | ThymeLeaf'
    },
  ]
  constructor() { }

  ngOnInit() {
    // this.config = {
    //   itemsPerPage: 6,
    //   currentPage: 1,
    //   totalItems: this.projects.length
    // };
  }

  // pageChanged(event){
  //   this.config.currentPage = event;
  // }
}
