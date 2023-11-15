import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salones',
  templateUrl: './salones.component.html',
  styleUrls: ['./salones.component.css']
})
export class SalonesComponent implements OnInit {

  constructor() { }

//Variables//
num1:number;
num2:number;
num3:number;
num4:number;

sal:number;
sal2:number;
sal3:number;
const:0;
salon:number;



Operacion(){
  this.salon=this.num1*1000+this.num2*100+this.num4;
  this.sal=this.num1;
  this.sal2=this.num2;
  this.sal3=this.num3+this.num4;
}




  ngOnInit() { 
  }

}
