import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any;

public getEventos():void {
  this.eventos = [{
    Tema:'Angular',
    Local: 'Belo Horizonte'
  },
  {
    Tema:'.NET',
    Local: 'Rio'
  }
];

}

//    public eventos: any = [{
//     Tema:'Angular',
//     Local: 'Belo Horizonte'
//   },
//   {
//     Tema:'.NET',
//     Local: 'Rio'
//   }
// ];

  constructor() { }

  ngOnInit() {
    this.getEventos();
  }

}
