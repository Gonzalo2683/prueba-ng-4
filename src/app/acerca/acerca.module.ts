import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcercaComponent } from './acerca.component';

const routes: Routes = [
  {
    path: '',
    component: AcercaComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AcercaComponent]
})
export class AcercaModule { }
