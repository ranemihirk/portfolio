import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TimeComponent } from './time/time.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'time', component: TimeComponent },
  { path: 'projects', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
