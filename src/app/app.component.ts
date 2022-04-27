import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-noticias';
listNoticias :any[]=[]

  constructor (private _noticiasService: NoticiasService){

}

  buscarNoticias(parametros :any){
    console.log(parametros);// funcion para saber si llega bien la info hasta aca ,funciona

    this._noticiasService.getNoticias(parametros).subscribe(data=>{
      console.log(data);
      //todo okey
      this.listNoticias= data.articles;
    } , error=>{
      console.log(error);
      
    })
  }
}
