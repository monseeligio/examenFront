import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceInicioService } from 'src/app/services/service-inicio.service';

interface Persona {
  gender: string;
  name: {
    first: string;
    last: string;
  };
  email: string;
  login:{
    username:string
  }
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent {
  datos: Persona[] = []
  constructor(private _serviceI: ServiceInicioService){}
  ngOnInit(): void {
    this.obtenerNombre()
  }

  obtenerNombre(){
    this._serviceI.SolicitudDatos().subscribe((data:any) => {
    this.datos=data.results
    console.log(this.datos);
    })
  }
  

}
