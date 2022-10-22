import { Component, OnInit } from '@angular/core';
import { User } from './../user';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {

  personne: User = {};

  userIdentifier: User = {
    pseudo: 'michel',
    password: 'rakoto2020',
  };

  isConnected: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  connect() {
    if (this.personne !== undefined) {
      if (this.userIdentifier.pseudo === this.personne.pseudo) {
        console.log('ao tsar iz zan!!');
      }
    }
  }

}
