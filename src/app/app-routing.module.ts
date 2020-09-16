import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PrivacityComponent } from './components/privacity/privacity.component';
import { TermsComponent } from './components/terms/terms.component';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'privacity', component: PrivacityComponent },
  { path: 'terms&conditions', component: TermsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
