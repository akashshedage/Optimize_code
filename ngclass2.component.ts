import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass2',
  templateUrl: './ngclass2.component.html',
  styleUrls: ['./ngclass2.component.css']
})
export class Ngclass2Component implements OnInit {

  employee:any[] = [
    {'name': "Jack", 'empId': 1001, 'company': "TCS", 'designation':"Angular Developer", 'salary': 50000, 'location': "Pune" },
    {'name': "Max", 'empId': 1002, 'company': "Infosys", 'designation':"React Developer", 'salary': 70000, 'location': "Mumbai" },
    {'name': "Rooney", 'empId': 1003, 'company': "TCS", 'designation':"Java Developer", 'salary': 45000, 'location': "Pune" },
    {'name': "Denial", 'empId': 1004, 'company': "HCL", 'designation':"UI Developer", 'salary': 80000, 'location': "Mumbai" },
    {'name': "John", 'empId': 1005, 'company': "Infosys", 'designation':"Full Stack Developer", 'salary': 100000, 'location': "Delhi" },
    {'name': "Smith", 'empId': 1006, 'company': "Wipro", 'designation':"Front End Developer", 'salary': 85000, 'location': "Kolkata" }
  ]
  constructor() { }

  ngOnInit() {
  }

}
