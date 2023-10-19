import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationComponent } from './components/presentation/presentation.component';
import { SelectedLivreComponent } from './components/selected-livre/selected-livre.component';
import { PatherrorComponent } from './errormessage/patherror/patherror.component';

const routes: Routes = [
  {path: '', component:PresentationComponent},
  {path:'selectedbook', component:SelectedLivreComponent},
  {path:'**', component:PatherrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
