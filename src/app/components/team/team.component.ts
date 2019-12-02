import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  display: boolean = false;
  useradd: boolean = false;
  data;
  details;
  constructor() {
   
  this.details=[{
    "deviceName" :"Lenovo",
    "deviceDetails":"Device Name:rani, Memory:7.5GiB, Processor:Intel® Core™ i5-3320M CPU @ 2.60GHz × 4 ,Graphics:Intel® Ivybridge Mobile,OS type:64-bit",
    "devicePurchaseDate":"12/11/1019",
    "maintainanceDetails":"Nill"
  
  },
  {
    "deviceName" :"Lapcare",
    "deviceDetails":"Model No:LVOADNP1541,Type:AC ADAPTOR, Power:65W,Sr.No.:41046620 ",
    "devicePurchaseDate":"2/12/2019",
    "maintainanceDetails":"Nill"
  
  }]
    this.data = [
      {
        "firstName": "Dhanshri",
        "lastName": "Autade",
        "email_id": "dhanshrei.autade@beautosys.com",
        "device_count": "2"
      },
      {
        "firstName": "Mohini",
        "lastName": "Avhad",
        "email_id": "mona.avhad@beautosys.com",
        "device_count": "2"
      },
      {
        "firstName": "Rani",
        "lastName": "Giramkar",
        "email_id": "rani.giramkar@beautosys.com",
        "device_count": "2"
      },
      {
        "firstName": "Anuradha",
        "lastName": "kaurv",
        "email_id": "anuradha.kaurv@beautosys.com",
        "device_count": "2"
      },
      {
        "firstName": "Jeet",
        "lastName": "Meravat",
        "email_id": "jeet.meravat@beautosys.com",
        "device_count": "2"
      },
      {
        "firstName": "Ashwini ",
        "lastName": "Mahind",
        "email_id": "aswini.mahind@beautosys.com",
        "device_count": "2"
      },
      {
        "firstName": "Amit",
        "lastName": "Yadav",
        "email_id": "amit.yadav@beautosys.com",
        "device_count": "2"

      },
      {
        "firstName": "Jyotiba",
        "lastName": "Bhosale",
        "email_id": "jyotiba.bhosale@beautosys.com",
        "device_count": "2"

      },
      {
        "firstName": "pallavi",
        "lastName": "ghoite",
        "email_id": "pallavi.ghoite@beautosys.com",
        "device_count": "2"

      },
      {
        "firstName": "Priyanka",
        "lastName": "khade",
        "email_id": "priyanka.khade@beautosys.com",
        "device_count": "2"

      },
      {
        "firstName": "shraddha",
        "lastName": "Jadhav",
        "email_id": "shraddha.jadhav@beautosys.com",
        "device_count": "2"

      },
      {
        "firstName": "Priyanka",
        "lastName": "Patil",
        "email_id": "priyanka.patil@beautosys.com",
        "device_count": "2"

      },
      {
        "firstName": "Pravin",
        "lastName": "Sanap",
        "email_id": "pravin.sanap@beautosys.com28",
        "device_count": "2"

      },
      {
        "firstName": "Sunil",
        "lastName": "Kwar",
        "email_id": "sunil.kwar@beautosys.com",
        "device_count": "2"

      },
      {
        "firstName": "Shubham",
        "lastName": "Deshmukh",
        "email_id": "shubham.deshmukh@beautosys.com",
        "device_count": "2"
      }]
  }

  showDialog() {
    this.display = true;
  }

  AddUser(){
    this.useradd = true;
  }
  ngOnInit() {
  }

}
