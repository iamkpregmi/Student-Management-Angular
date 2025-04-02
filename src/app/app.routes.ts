import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

export const routes: Routes = [
    {path:"", component: HomeComponent},
    {path:"about", component: AboutComponent},
    {path:"contact", component: ContactComponent},
    {path:"user", component: UserComponent},
    {path:"profile/:id", component: ProfileComponent},
    {path:"emp-info", component: EmployeeInfoComponent},
    {path:"add-emp", component: AddEmployeeComponent},
    {path:"**", component: PageNotFoundComponent},
];
