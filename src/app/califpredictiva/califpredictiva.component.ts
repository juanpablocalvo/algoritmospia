import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'califpredictiva',
  templateUrl: './califpredictiva.component.html',
  styleUrls: ['./califpredictiva.component.css']
})
export class CalifpredictivaComponent implements OnInit {

  constructor() { }

  predex1:number=0;
  predex2:number=0;

  predvalex1:number=0;
  predvalex2:number=0;

  predpondex1:number;
  predpondex2:number;

  predtar1:number=0;
  predtar2:number=0;
  predtar3:number=0;
  predtar4:number=0;
  predtar5:number=0;

  predvaltar1:number=0;
  predvaltar2:number=0;
  predvaltar3:number=0;
  predvaltar4:number=0;
  predvaltar5:number=0;

  predpondtar1:number;
  predpondtar2:number;
  predpondtar3:number;
  predpondtar4:number;
  predpondtar5:number;

  predvalfinalex1:number;
  predvalfinalex2:number;

  predvalfinaltar1:number;
  predvalfinaltar2:number;
  predvalfinaltar3:number;
  predvalfinaltar4:number;
  predvalfinaltar5:number;

  predicalifinal:number=0;
  objetivo:number=0;
  parallegarvalor:number;
  parallegarvalor2:number=0;
  valorcurso:number=100;
  aviso:string;
  aviso2:string;
  resultaviso:number;
  resultaviso2:number;
  sumavalores:number;

  aviso3:string;
  aviso4:string;
  resultexito:number;
  nopasas:string;

  Predictiva(){

    this.predpondex1=this.predvalex1/100;
    this.predpondex2=this.predvalex2/100;

    this.predpondtar1=this.predvaltar1/100;
    this.predpondtar2=this.predvaltar2/100;
    this.predpondtar3=this.predvaltar3/100;
    this.predpondtar4=this.predvaltar4/100;
    this.predpondtar5=this.predvaltar5/100;

    this.predvalfinalex1=this.predex1*this.predpondex1;
    this.predvalfinalex2=this.predex2*this.predpondex2;

    this.predvalfinaltar1=this.predtar1*this.predpondtar1;
    this.predvalfinaltar2=this.predtar2*this.predpondtar2;
    this.predvalfinaltar3=this.predtar3*this.predpondtar3;
    this.predvalfinaltar4=this.predtar4*this.predpondtar4;
    this.predvalfinaltar5=this.predtar5*this.predpondtar5;

    this.predicalifinal=this.predvalfinalex1+this.predvalfinalex2+this.predvalfinaltar1+this.predvalfinaltar2+this.predvalfinaltar3+this.predvalfinaltar4+this.predvalfinaltar5;
    this.sumavalores=this.predvalex1+this.predvalex2+this.predvaltar1+this.predvaltar2+this.predvaltar3+this.predvaltar4+this.predvaltar5;

   this.diferenciaValores();
   this.diferenciaObjetivo();
   this.verificarObjetivo();
   this.superarObjetivo();

   this.errorpredex1();
   this.errorpredex2();
   this.errorpredtar1();
   this.errorpredtar2();
   this.errorpredtar3();
   this.errorpredtar4();
   this.errorpredtar5();


  }

 diferenciaValores(){
  this.parallegarvalor=this.predvalex1+this.predvalex2+this.predvaltar1+this.predvaltar2+this.predvaltar3+this.predvaltar4+this.predvaltar5;
    if(this.parallegarvalor<100){
      this.parallegarvalor2=this.valorcurso-this.parallegarvalor;
    }
  }

  diferenciaObjetivo(){
    if(this.predicalifinal<this.objetivo){
      this.aviso="Oh oh! Aún no has alcanzado tu promedio objetivo, te faltan:";
      this.aviso2="puntos para alcanzarlo!";
      this.resultaviso=this.objetivo-this.predicalifinal;
    }
  }

  verificarObjetivo(){
    if(this.objetivo==0){
      alert('¡Error! Tu objetivo de promedio no puede ser 0, intenta nuevamente.')
      this.predicalifinal=0;
      this.parallegarvalor2=0;
      this.resultaviso=0;
      this.aviso3="";
      this.aviso4="";
      this.nopasas="";
    }
  }

  superarObjetivo(){
    if(this.predicalifinal>=this.objetivo){
      this.aviso3="¡Felicitaciones! Ya alcanzaste tu calificación objetivo, superándole por: ";
      this.resultexito=this.predicalifinal-this.objetivo;
      this.aviso4="puntos en total :D";
      this.aviso="";
      this.aviso2="";
      this.nopasas="";
      this.resultaviso=0;
    }
  }

  /*posiblePasar(){
    this.resultaviso2=this.objetivo-this.predicalifinal;
    if(this.parallegarvalor2>this.resultaviso2){
      this.nopasas="¡Ya no alcanzaste! Aún sacando 100 en todo, no podrás alcanzar tu objetivo :(";
      this.aviso="";
      this.aviso2="";
      this.aviso3="";
      this.aviso4="";
      this.resultaviso=0;
    }
  }*/

//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------
//--------------------------------------- E R R O R E S ---------------------------------------------------
//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------

errorpredex1(){
  if(this.predex1>100){
     alert("¡Error! La calificación máxima que puedes obtener en alguna actividad/examen es 100. Si sobrepasas esta cifra, tu promedio no será correcto (Revisa la calificación de tu Examen Medio Curso).");
  this.predicalifinal=0;
  }
}

errorpredex2(){
  if(this.predex2>100){
     alert("¡Error! La calificación máxima que puedes obtener en alguna actividad/examen es 100. Si sobrepasas esta cifra, tu promedio no será correcto (Revisa la calificación de tu Examen Ordinario).");
  this.predicalifinal=0;
  }
}

errorpredtar1(){
  if(this.predtar1>100){
     alert("¡Error! La calificación máxima que puedes obtener en alguna actividad/examen es 100. Si sobrepasas esta cifra, tu promedio no será correcto (Revisa la calificación de tu Tarea 1).");
  this.predicalifinal=0;
  }
}

errorpredtar2(){
  if(this.predtar2>100){
     alert("¡Error! La calificación máxima que puedes obtener en alguna actividad/examen es 100. Si sobrepasas esta cifra, tu promedio no será correcto (Revisa la calificación de tu Tarea 2).");
  this.predicalifinal=0;
  }
}

errorpredtar3(){
  if(this.predtar3>100){
     alert("¡Error! La calificación máxima que puedes obtener en alguna actividad/examen es 100. Si sobrepasas esta cifra, tu promedio no será correcto (Revisa la calificación de tu Tarea 3).");
  this.predicalifinal=0;
  }
}

errorpredtar4(){
  if(this.predtar4>100){
     alert("¡Error! La calificación máxima que puedes obtener en alguna actividad/examen es 100. Si sobrepasas esta cifra, tu promedio no será correcto (Revisa la calificación de tu Tarea 4).");
  this.predicalifinal=0;
  }
}

errorpredtar5(){
  if(this.predtar5>100){
     alert("¡Error! La calificación máxima que puedes obtener en alguna actividad/examen es 100. Si sobrepasas esta cifra, tu promedio no será correcto (Revisa la calificación de tu Tarea 5).");
  this.predicalifinal=0;
  }
}

errorPromedio(){
  if(this.predicalifinal>100){
    alert("¡Error! Los datos que has introducido no son correctos, presiona ''ACEPTAR'' e intenta nuevamente. ERROR 1");
  this.predicalifinal=0;
  this.parallegarvalor2=0;
  this.resultexito=0;
  }
}

errorpredValores(){
  if(this.sumavalores>100){
    alert("¡Error! La suma del valor de tus actividades no puede exceder 100, intenta nuevamente.");
  }
}

  ngOnInit() {
  }

}
