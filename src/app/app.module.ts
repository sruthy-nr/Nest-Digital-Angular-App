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
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { NavbarEmployeeComponent } from './navbar-employee/navbar-employee.component';
import { HttpClientModule } from "@angular/common/http";


const myRoute:Routes=[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"gallery",
    component:GalleryComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"admin",
    component:AdminComponent
  },
  {
    path:"employee",
    component:EmployeeComponent
  },
  {
    path:"register",
    component:EmployeeregisterComponent
  },
  {
    path:"addc",
    component:AddCourseComponent
  },
  {
    path:"addf",
    component:AddFriendComponent
  },
  {
    path:"viewc",
    component:ViewCourseComponent
  },
  {
    path:"viewf",
    component:ViewFriendComponent
  },
  {
    path:"navadmin",
    component:NavbarAdminComponent
  },
  {
    path:"navemployee",
    component:NavbarEmployeeComponent
  }
]
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
    ViewFriendComponent,
    NavbarComponent,
    NavbarAdminComponent,
    NavbarEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
