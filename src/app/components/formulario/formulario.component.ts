import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  //funcion para poder enviar los componentes al componente padre
@Output () parametrosSeleccionados = new EventEmitter<any>()


  categoriaSeleccionada='general';
  paisSeleccionado='ar'
 // preparo los value para que macheen  con los datos de la api
 // luego en expongo el nombre de la categoria que macheo 
  categorias :any[] =[
     {value:'general',nombre:'General'},
     {value:'business',nombre:'Negocios'},
     {value:'entertainment',nombre:'Entretenimiento'},
     {value:'health',nombre:'Salud'},
     {value:'science',nombre:'Ciencia'},
     {value:'sports',nombre:'Deportes'},
     {value:'technology',nombre:'Tecnoligía'},
    ]
// preparo los value para que macheen  con los datos de la api
// luego en expongo el nombre del pais que macheo 
paises:any[]=[
  {value:'ar',nombre:'Argentina'},
  {value:'br',nombre:'Brasil'},
  {value:'fr',nombre:'Francia'},
  {value:'hu',nombre:'Hungria'},
  {value:'mx',nombre:'Mexico'},
  {value:'gb',nombre:'Reino Unido'},
]

  constructor() { }

  ngOnInit(): void {
  }
  buscarNoticia(){
    //console.log(this.paisSeleccionado);// verifico que recibo bien los parametros de busqueda
    //console.log(this.categoriaSeleccionada);  // funcionan 


    const PARAMETROS={
      categoria : this.categoriaSeleccionada,
      pais : this.paisSeleccionado
    }
    this.parametrosSeleccionados.emit(PARAMETROS);
// envio los parametros hijos al componente padre
  }

}
