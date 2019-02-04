import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  public uneValeur: string;
  public uneInterpolation: string;

  constructor() {
    this.uneValeur = "C'est une liaison output avec []";
    this.uneInterpolation = "Ceci est un paragraphe.";
   }

  ngOnInit() {
  }

  public changerUneValeur() : void  {
    this.uneValeur = "Une valeur de 'uneValeur' a changé";
  }

}
