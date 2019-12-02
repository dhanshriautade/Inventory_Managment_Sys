import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  display: boolean = false;
  useradd: boolean = false;
  devicedetails
  
  constructor(){
    this.devicedetails=[{
      "deviceName" :"Lenovo",
      "deviceDetails":"Device Name:rani, Memory:7.5GiB, Processor:Intel® Core™ i5-3320M CPU @ 2.60GHz × 4 ,Graphics:Intel® Ivybridge Mobile,OS type:64-bit",
      "devicePurchaseDate":"12/11/1019",
      "maintainanceDetails":"Nill",
      "price":"30000"
    

      
    },
    {
      "deviceName" :"Dell",
      "deviceDetails":"Device Name:Mohini, Memory:7.5GiB, Processor:Intel® Core™ i3-3320M CPU @ 2.60GHz × 4 ,Graphics:Intel® Ivybridge Mobile,OS type:64-bit",
      "devicePurchaseDate":"11/11/1019",
      "maintainanceDetails":"Nill",
      "price":"25000"
    },
    {
      "deviceName" :"Lenovo",
      "deviceDetails":"Device Name:Dhanshri, Memory:7.5GiB, Processor:Intel® Core™ i7-3320M CPU @ 2.60GHz × 4 ,Graphics:Intel® Ivybridge Mobile,OS type:64-bit",
      "devicePurchaseDate":"25/11/1019",
      "maintainanceDetails":"Nill",
      "price":"25000"
    },
    {
      "deviceName" :"Dell",
      "deviceDetails":"Device Name:sandip, Memory:7.5GiB, Processor:Intel® Core™ i3-3320M CPU @ 2.60GHz × 4 ,Graphics:Intel® Ivybridge Mobile,OS type:64-bit",
      "devicePurchaseDate":"29/11/1019",
      "maintainanceDetails":"Nill",
      "price":"40000"
    },
    {
      "deviceName" :"lenovo",
      "deviceDetails":"Device Name:anuradha, Memory:7.5GiB, Processor:Intel® Core™ i3-3320M CPU @ 2.60GHz × 4 ,Graphics:Intel® Ivybridge Mobile,OS type:64-bit",
      "devicePurchaseDate":"30/11/1019",
      "maintainanceDetails":"Nill",
      "price":"350000"
    },
    {
      "deviceName" :"Dell",
      "deviceDetails":"Device Name:jit, Memory:7.5GiB, Processor:Intel® Core™ i3-3320M CPU @ 2.60GHz × 4 ,Graphics:Intel® Ivybridge Mobile,OS type:64-bit",
      "devicePurchaseDate":"01/11/1019",
      "maintainanceDetails":"Nill",
      "price":"32000"
    },
    {
      "deviceName" :"lenovo",
      "deviceDetails":"Device Name:pravin, Memory:7.5GiB, Processor:Intel® Core™ i3-3320M CPU @ 2.60GHz × 4 ,Graphics:Intel® Ivybridge Mobile,OS type:64-bit",
      "devicePurchaseDate":"04/11/1019",
      "maintainanceDetails":"Nill",
      "price":"33000"
    }]
  }
  showDialog() {
    this.display = true;
  }

  AddDevice(){
    this.useradd = true;
  }
 
  ngOnInit() {
  }

}
