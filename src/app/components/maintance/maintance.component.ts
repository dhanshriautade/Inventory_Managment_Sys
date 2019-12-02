import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintance',
  templateUrl: './maintance.component.html',
  styleUrls: ['./maintance.component.css']
})
export class MaintanceComponent implements OnInit {
  display: boolean = false;
  useradd: boolean = false;
  maintainance


  constructor() {
    this.maintainance=[{
      "maintainance" :"Laptop battery repair",
      "officeName" :"Balewadi",
      "date" :"12/11/2019",
      "description" :"Battery issue",
      "amount" :"10000",
      "note" :"Nill"
    },
    {
      "maintainance" :"Laptop issue",
      "officeName" :"Narhe",
      "date" :"13/11/2019",
      "description" :"Display issue",
      "amount" :"2000",
      "note" :"Nill"
    },
    {
    "maintainance" :"Laptop issue",
    "officeName" :"Balewadi",
    "date" :"15/11/2019",
    "description" :"Charger issue",
    "amount" :"1500",
    "note" :"Nill"
    },
    {
      "maintainance" :"Laptop issue",
      "officeName" :"Narhe",
      "date" :"20/11/2019",
      "description" :"System issue",
      "amount" :"1000",
      "note" :"Nill"
    
    }]
   }
   showDialog() {
    this.display = true;
  }

   AddMaint(){
    this.useradd = true;
   }
 
  ngOnInit() {
  }

}
