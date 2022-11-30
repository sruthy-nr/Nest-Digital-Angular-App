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
        this.friend=response;
      }
    )
  }
  friend:any=[]
  // gallery:any=[{
  //   "img":"https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?b=1&s=170667a&w=0&k=20&c=Dl9uxPY_Xn159JiazEj0bknMkLxFdY7f4tK1GtOGmis="},
  //   {"img":"https://pbs.twimg.com/media/FV6OvNraIAAdmLE?format=jpg&name=large"
  //   },{"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9wuucNN0eGIJ4pM0OawnrF9E2ULnVNQHAgrvfFnPSoWkSzbFPp-1f9VH9AnD6e1CvKWQ&usqp=CAU"},
  //   {"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgxEMqNtyNDx6YsPe3KINJ1d56EZfo_wrYYuWpW2GnpWXmOWtRlN7BKEq82dFsA2tFc7g&usqp=CAU"},
  //   {"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbJ80rKzjwGIivUMOgb1fqJcECaqPD7jbBlRTNc-MyKLdW8yD_gm2UQzFghHEQempFPDo&usqp=CAU"},
  //   {"img":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/NeST_Tech_Park.jpg/1200px-NeST_Tech_Park.jpg"},
  //   {"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8dvrOqxvawqXe-jW5Wppvzmwy0vllK-J3SG4nAcAx&s"}
  // ]
}
