import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  [x: string]: any;

  constructor(private router: Router) { }
  

  dashboard(){
    this.router.navigate(['/Main/dashboard']);
  }

  team(){
    this.router.navigate(['/Main/team']);
  }

  device(){
    this.router.navigate(['/Main/device']);
  }
  maintance(){
    this.router.navigate(['/Main/maintance']);
  }
  ngOnInit() {
  }

}
