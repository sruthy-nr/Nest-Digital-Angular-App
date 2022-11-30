import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeeregister',
  templateUrl: './employeeregister.component.html',
  styleUrls: ['./employeeregister.component.css']
})
export class EmployeeregisterComponent {
  employeeid=""
  firstname=""
  lastname=""
  houseno=""
  housename=""
  streetname=""
  pincode=""
  district=""
  state=""
  country=""
  mobile=""
  email=""
  parentname=""
  gender=""
  highestdegree=""
  yearofexperience=""
  dateofjoining=""
  username=""
  password=""
  confirmpassword=""

  constructor(private route:Router){}
  register=()=>{
    let data:any={
      "employeeid":this.employeeid,
      "firstname":this.firstname,
      "lastname":this.lastname,
      "houseno":this.houseno,
      "housename":this.housename,
      "streetname":this.streetname,
      "pincode":this.pincode,
      "district":this.district,
      "state":this.state,
      "country":this.country,
      "mobile":this.mobile,
      "email":this.email,
      "parentname":this.parentname,
      "gender":this.gender,
      "highestdegree":this.highestdegree,
      "yearofexperience":this.yearofexperience,
      "dateofjoining":this.dateofjoining,
      "username":this.username,
      "password":this.password,
      "confirmpassword":this.confirmpassword
    }
    
    if (this.password==this.confirmpassword) {
      console.log(data)
      alert("Registered Successfully")
      this.employeeid=""
      this.firstname=""
      this.lastname=""
      this.houseno=""
      this.housename=""
      this.streetname=""
      this.pincode=""
      this.district=""
      this.state=""
      this.country=""
      this.mobile=""
      this.email=""
      this.parentname=""
      this.gender=""
      this.highestdegree=""
      this.yearofexperience=""
      this.dateofjoining=""
      this.username=""
      this.password=""
      this.confirmpassword=""
    } else {
      alert("Password & confirm password does not match")
    }
  }
}
