import { inject, observer } from "mobx-react"
import React from "react"
import {Link} from 'react-router-dom'
class ListadoPeliculas extends React.Component
{
    render()
    {
        const {peliculas}= this.props

        return(  //siempre paréntesis para que no se confunda el compilador
            <div>listado
                <h1>Listado de Películas</h1>
                <h2>{peliculas.nombre}</h2>
                <Link to="/">regresar a home</Link>
            </div>
        )
    }
}
export default inject('peliculas')(
    observer(ListadoPeliculas)
)