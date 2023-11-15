import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.css']
})
export class HerramientasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navegarCalcuprom(){
    this.router.navigate(['/calculadora-de-promedios']);
  }

  navegarCalcupred(){
    this.router.navigate(['/calculadora-predictiva']);
  }

  encontrarSalon(){
    this.router.navigate(['/encuentra-tu-salon']);
  }

  goHome(){
    this.router.navigate(['/home']);
  }

  olaDemonio(){
    alert('¡Aún no puedes acceder aquí');
    this.router.navigate(['/home']);
  }
}
