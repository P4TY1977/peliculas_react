
import {makeAutoObservable} from 'mobx'

export default class PeliculasStore

{
    constructor()
    {makeAutoObservable(this)}
   nombre = "Pesadilla en la calle del infierno"
   listado = []

    cambiarNombre(nombre)
    {
        this.nombre = nombre
    }
}
{/* Tarea hacer el listado con bootstrap */}
