import React from "react"
import {Link} from 'react-router-dom'
class ListadoPeliculas extends React.Component
{
    render()
    {
        return(  //siempre paréntesis para que no se confunda el compilador
            <div>listado
                <Link to="/">regresar a home</Link>
            </div>
        )
    }
}
export default ListadoPeliculas