import { ThrowStmt } from '@angular/compiler';
import { ngfactoryFilePath } from '@angular/compiler/src/aot/util';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { isNumber } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  memory = [];
  pantalla = 0;
  pantallaHome = true;
  save = 0;
  operator = "";

  num(n){
    this.memory.push(n);
    this.pantalla = Number(this.memory.join(""));

  }

  clear(){
    this.pantalla = 0;
    this.memory = [];
  }

  operation(op){
    this.save = this.pantalla;
    this.memory = [];
    this.operator = op;
  }

  pi(){
    this.memory = [Math.PI];
    this.pantalla = Math.PI;
  }

  sen(){
    this.memory = [Math.sin(Number(this.memory))];
    this.pantalla = Number(this.memory[0]);
  }

  equal(){
    if(this.operator === '+'){
      this.pantalla += this.save;
    }else if(this.operator === '-'){
      this.pantalla = this.save - this.pantalla;
    }else if(this.operator === '*'){
      this.pantalla *= this.save;
    }else if(this.operator === '/'){
      this.pantalla = this.save / this.pantalla;
    }
  }

}
