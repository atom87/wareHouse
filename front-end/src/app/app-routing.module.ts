import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { DocumentsComponent } from './documents/documents.component';
import { AboutComponent } from './core/about/about.component';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "documents", component: DocumentsComponent},
  {path: "about", component: AboutComponent},
  {path: "", redirectTo: "/home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
