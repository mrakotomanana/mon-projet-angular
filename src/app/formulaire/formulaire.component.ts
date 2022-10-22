import { Component, Input, OnInit } from '@angular/core';
import { Personne } from './../interfaces/personne';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {
  nom = '';
  result = '';
  personne: Personne = {};
  personnes: Array<Personne> = [];

  constructor() { }
  ngOnInit() { }

  direBonjour(){
    this.result = this.nom;
    console.log('result : ' + this.result);
  }

  test() {
    console.log('test');
  }

  ajouter() {
    this.personnes.push({ ...this.personne });
    this.personne.nom = '';
    this.personne.prenom = '';
    console.log(this.personne);
  }
}
