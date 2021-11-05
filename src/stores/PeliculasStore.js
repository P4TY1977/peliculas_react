
import { makeAutoObservable } from 'mobx'
import servicioPeliculas from '../services/servicioPeliculas'
export default class PeliculasStore
{
	constructor()
	{ makeAutoObservable(this) }
  titulo = "Video centro"
   listadoCargado = false
   listado =[]
   async cargarListado()
   {
	   try{
		   this.listado = await servicioPeliculas.leerPeliculas()
		   listadoCargado= true
	   }

	   catch (error)
	   {
		   this.listadoCargado = false
	   }
   }
		
   limpiar()
   {
	   this.listado =[]
	   this.listadoCargado = false
   }

	cambiarNombre( nombre,indice )
	{
/*		this.listado[0].nombre = nombre*/
    this.titulo = nombre
	}
}
