import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addCourse=(dataToSend:any)=>{
    return this.http.post("http://mylinkurcodesapp.herokuapp.com/addcourse",dataToSend)
  }
  addFriend=(dataToSend:any)=>{
    return this.http.post("https://dummyapifriends.herokuapp.com/adddata",dataToSend)
  }
  fetchCourse=()=>{
    return this.http.get("https://mylinkurcodesapp.herokuapp.com/getcourses")
  }
  fetchFriend=()=>{
    return this.http.get("https://dummyapifriends.herokuapp.com/view")
  }
}
