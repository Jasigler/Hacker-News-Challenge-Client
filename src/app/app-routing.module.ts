import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReaderComponent} from './core/reader/reader.component';
import {NotfoundComponent} from './shared/notfound/notfound.component';

const routes: Routes = [
  {path: '', component: ReaderComponent},
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
