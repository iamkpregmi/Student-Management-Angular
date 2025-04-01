import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:"", component: HomeComponent},
    {path:"about", component: AboutComponent},
    {path:"contact", component: ContactComponent},
    {path:"user", component: UserComponent},
    {path:"**", component: PageNotFoundComponent},
];
