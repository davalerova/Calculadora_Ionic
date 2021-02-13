import { ngfactoryFilePath } from '@angular/compiler/src/aot/util';
import { Component } from '@angular/core';
import { isNumber } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  pantalla = "0";
  pantallaHome = true;

  num(n){
    if (typeof n === "number"){
      if (this.pantallaHome){
        this.pantalla = this.pantalla = ""+n;
        this.pantallaHome = false;
      }
      else{
        this.pantalla += ""+n;
      }
    }
    else if(n == "AC"){
      this.pantalla = "0";
      this.pantallaHome = true;
    }
  }

}
