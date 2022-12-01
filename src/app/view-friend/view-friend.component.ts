import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-friend',
  templateUrl: './view-friend.component.html',
  styleUrls: ['./view-friend.component.css']
})
export class ViewFriendComponent {
  constructor(private api:ApiService){
    api.fetchFriend().subscribe(
      (response)=>{
        this.loading=false
        this.friend=response;
      }
    )
  }
  friend:any=[]
  loading :boolean=true
}
