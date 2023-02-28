import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainChartComponent } from './main-chart/main-chart.component';
import { PracticeComponent } from './practice/practice.component';

const routes: Routes = [
  {path:'',redirectTo:'main-chart',pathMatch:'full'},
  {path:'practice',component:PracticeComponent},
  {path:'main-chart',component:MainChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
