import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { CalendarComponent } from './calendar/calendar.component';
import { OverviewComponent } from './overview/overview.component';
import { TasksComponent } from './tasks/tasks.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [{ path: '', redirectTo: '/login', pathMatch: 'full' },
 { path: 'register', component: RegisterComponent},
{path: 'dashboard', component: DashboardComponent},
  { path: 'project', component: ProjectComponent },
  { path:'login',component:LoginComponent},
  { path: 'calendar', component: CalendarComponent},
  { path: 'tasks', component: TasksComponent},
  { path: 'project-list/:id',component: ProjectListComponent},
  { path: 'project-list/:id/overview', component: OverviewComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
