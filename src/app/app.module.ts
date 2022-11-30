import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeregisterComponent } from './employeeregister/employeeregister.component';
import { AdminComponent } from './admin/admin.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { FormsModule } from '@angular/forms';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { ViewFriendComponent } from './view-friend/view-friend.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    ContactComponent,
    AboutComponent,
    EmployeeComponent,
    EmployeeregisterComponent,
    AdminComponent,
    AddCourseComponent,
    AddFriendComponent,
    ViewCourseComponent,
    ViewFriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
