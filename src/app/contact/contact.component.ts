import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
name=""
phone=""
email=""
readValues=()=>{
  let data:any={
    "name":this.name,
    "phone":this.phone,
    "email":this.email
  }
  console.log(data)
}
}
