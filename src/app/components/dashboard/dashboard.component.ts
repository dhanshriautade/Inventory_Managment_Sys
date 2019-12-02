import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: any;
  constructor() { 
    this.data = {
      backgroundColor: '#c7e5ff00',
      borderColor: '#96B4F6',
        legend: {
            labels: {
                fontColor: 'white'
            }
        },
  
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August' , 'September', 'Octomber'],
      datasets: [
        
          {
              label: 'Project Status',
              data: [65, 59, 80, 81, 56, 55, 40 , 91, 96 ,95]
          },
          {
              label: 'Employee Contribution',
              data: [28, 48, 40, 19, 86, 27, 90 ,90 ,84 ,90]
          }
      ]
  }
  }
  
  ngOnInit() {
  }

}
