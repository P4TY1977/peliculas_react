import { inject, observer } from "mobx-react"
import React from "react"
import {Link} from 'react-router-dom'
import DetallePelicula from "../DetallePelicula"

class ListadoPeliculas extends React.Component
{
    constructor(props){
        super(props)
        const {peliculas}= props
        if (! peliculas.listadoCargado)
            peliculas.cargarListado()
    }

    renombrarPelicula()
    {
        console.log("ejecutado")
        this.props.peliculas.cambiarNombre("Bambi")
    }
    render()
    {
        const {peliculas}= this.props
        const clasificar=this.props.match.params.clasificacion
        console.log("params "+ clasificar )
        const peliculasFiltradas = peliculas.listado.filter( pelicula => pelicula.clasificacion == clasificar )
        return(  //siempre paréntesis para que no se confunda el compilador
            <div class="text-center"> 
                <div class="row">
                    <div class="col fs-3 text-center mb-3">
                        Titulos {clasificar=="A"?"Infantil":(clasificar=="B"?"Adolescentes":"Adultos")}
                    </div>
                </div>
            <div class="row row-cols-1 row-cols-md-4 g-4">
            { peliculasFiltradas.map(pelicula => (
             <DetallePelicula datos={ pelicula }/>
            ))}
            </div>
                <Link to="/" class="btn btn-outline-light mt-5 mb-5"><i class="bi-house-fill display-4"></i></Link>                
            </div>
        )
    }
}
export default inject('peliculas')(
    observer(ListadoPeliculas)
)