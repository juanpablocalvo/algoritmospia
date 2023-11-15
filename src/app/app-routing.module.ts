import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';     // Add your component here
//import { AboutComponent } from './about/about.component';  // Add your component here
import { CalifComponent } from './calif/calif.component';
import { CalifpredictivaComponent} from './califpredictiva/califpredictiva.component'
import { HerramientasComponent } from './herramientas/herramientas.component';
import { SalonesComponent } from './salones/salones.component';

//This is my case 
const routes: Routes = [
       {
           path: '',
           component: HomeComponent
       },
       {
            path: 'home',
            component: HomeComponent
        },
       {
           path: 'calculadora-de-promedios',
           component: CalifComponent
       },
       {
           path: 'calculadora-predictiva',
           component: CalifpredictivaComponent
       },
       {
            path: 'herramientas',
            component: HerramientasComponent
       },
       {
           path: 'encuentra-tu-salon',
           component: SalonesComponent
       }
];

@NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
})
export class AppRoutingModule { }