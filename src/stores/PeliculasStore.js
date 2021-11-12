
import { makeAutoObservable } from 'mobx'
import servicioPeliculas from '../services/servicioPeliculas'
export default class PeliculasStore
{
	constructor()
	{ makeAutoObservable(this) }
  titulo = "Video centro"
  errorListado = false
   listadoCargado = false
   listado =[]
   async cargarListado()
   {
	   this.errorListado = false
	   try{
		   this.listado = await servicioPeliculas.leerPeliculas()
		   this.listadoCargado= true
	   }

	   catch (error)
	   {
		   this.errorListado = true
		   this.listadoCargado = false
	   }
   }
		
   limpiar()
   {
	   this.listado =[]
	   this.listadoCargado = false
	   this.errorListado = false
   }

	cambiarNombre( nombre,indice )
	{
/*		this.listado[0].nombre = nombre*/
    this.titulo = nombre
	}
}
