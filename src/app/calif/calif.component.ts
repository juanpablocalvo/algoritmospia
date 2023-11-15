import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Script } from 'vm';

@Component({
  selector: 'calif',
  templateUrl: './calif.component.html',
  styleUrls: ['./calif.component.css']
})
export class CalifComponent implements OnInit {

  constructor(private router: Router) { }

  // Variables examenes
  ex1:number=0;
  ex2:number=0;

  valex1:number;
  valex2:number;

  pondex1:number;
  pondex2:number;

  // Variables tareas
  tar1:number=0;
  tar2:number=0;
  tar3:number=0;
  tar4:number=0;
  tar5:number=0;

  valtar1:number;
  valtar2:number;
  valtar3:number;
  valtar4:number;
  valtar5:number;

  pondtar1:number;
  pondtar2:number;
  pondtar3:number;
  pondtar4:number;
  pondtar5:number;

  // Calificaciones finales
  valfinalex1:number;
  valfinalex2:number;

  valfinaltar1:number;
  valfinaltar2:number;
  valfinaltar3:number;
  valfinaltar4:number;
  valfinaltar5:number;

  valores:number;
  ponders:number;
  califinal:number;

  Operacion(){
   // Operaciones Examenes
   this.pondex1=this.valex1/100;
   this.valfinalex1=this.pondex1*this.ex1;

   this.pondex2=this.valex2/100;
   this.valfinalex2=this.pondex2*this.ex2;

   // Operaciones tareas
   this.pondtar1=this.valtar1/100;
   this.valfinaltar1=this.pondtar1*this.tar1;

   this.pondtar2=this.valtar2/100;
   this.valfinaltar2=this.pondtar2*this.tar2;

   this.pondtar3=this.valtar3/100;
   this.valfinaltar3=this.pondtar3*this.tar3;

   this.pondtar4=this.valtar4/100;
   this.valfinaltar4=this.pondtar4*this.tar4;

   this.pondtar5=this.valtar5/100;
   this.valfinaltar5=this.pondtar5*this.tar5;

   // Suma de calificaciones
    this.valores=this.ex1+this.ex2+this.tar1+this.tar2+this.tar3+this.tar4+this.tar5;

   // Operación promedio final
    this.califinal=this.valfinalex1+this.valfinalex2+this.valfinaltar1+this.valfinaltar2+this.valfinaltar3+this.valfinaltar4+this.valfinaltar5;

    //Intento de suma de hacer que la suma deba ser obligatoriamente 100
    this.ponders=this.valtar1+this.valtar2+this.valtar3+this.valtar4+this.valtar5+this.valex1+this.valex2;

    // Mensajes de error
    this.errorsumval();
    this.errorex1();
    this.errorex2();
    this.errortar1();
    this.errortar2();
    this.errortar3();
    this.errortar4();
    this.errortar5();
    this.errorponder();
  }

// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------
// ------------------------------- E R R O R E S-----------------------------------
// --------------------------------------------------------------------------------
// --------------------------------------------------------------------------------

  errorsumval(){
    if(this.califinal>100){
      alert("¡Error! Los datos que has introducido no son correctos, presiona ''ACEPTAR'' e intenta nuevamente. ERROR 1");
    this.califinal=0;
    }
  }

  errorponder(){
    if(this.ponders<100){
      alert("¡Error! Los datos que has introducido no son correctos. La sumatoria del valor de tus actividades no da como resultado 100 puntos posibles.");
      this.califinal=0;
    }
  }

  errorex1(){
    if(this.ex1>100){
       alert("¡Error! La calificación máxima que puedes obtener en alguna actividad/examen es 100. Si sobrepasas esta cifra, tu promedio no será correcto (Revisa la calificación de tu Examen Medio Curso).");
    this.califinal=0;
    }
  }

  errorex2(){
    if(this.ex2>100){
       alert("¡Error! La calificación máxima que puedes obtener en alguna actividad/examen es 100. Si sobrepasas esta cifra, tu promedio no será correcto (Revisa la calificación de tu Examen Ordinario).");
    this.califinal=0;
    }
  }

  errortar1(){
    if(this.tar1>100){
      alert("¡Error! La calificación máxima que puedes obtener en alguna actividad/examen es 100. Si sobrepasas esta cifra, tu promedio no será correcto (Revisa la calificación de tu tarea 1).");
    this.califinal=0;
    }
  }

  errortar2(){
    if(this.tar2>100){
       alert("¡Error! La calificación máxima que puedes obtener en alguna actividad/examen es 100. Si sobrepasas esta cifra, tu promedio no será correcto (Revisa la calificación de tu tarea 2).");
    this.califinal=0;
    }
  }

  errortar3(){
    if(this.tar3>100){
       alert("¡Error! La calificación máxima que puedes obtener en alguna actividad/examen es 100. Si sobrepasas esta cifra, tu promedio no será correcto (Revisa la calificación de tu tarea 3).");
    this.califinal=0;
    }  
  }

  errortar4(){
    if(this.tar4>100){
      alert("¡Error! La calificación máxima que puedes obtener en alguna actividad/examen es 100. Si sobrepasas esta cifra, tu promedio no será correcto (Revisa la calificación de tu tarea 4).");
    this.califinal=0;
    }
  }

  errortar5(){
    if(this.tar5>100){
       alert("¡Error! La calificación máxima que puedes obtener en alguna actividad/examen es 100. Si sobrepasas esta cifra, tu promedio no será correcto (Revisa la calificación de tu tarea 5).");
    this.califinal=0;
    }
  }
    
  navegarCalcupred(){
    this.router.navigate(['/calculadora-predictiva']);
  }

  goHome(){
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
