import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentFormComponent } from './component-form/component-form.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { PaginaBiancaComponent } from './pagina-bianca/pagina-bianca.component';


const appRoutes: Routes = [
  { path: 'reactive', component : ComponentFormComponent},
  { path: 'paginabianca', component : PaginaBiancaComponent},
  { path: '**', redirectTo : 'paginabianca'}
];
  


@NgModule({
  declarations: [
    AppComponent,
    ComponentFormComponent,
    PaginaBiancaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true})
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
