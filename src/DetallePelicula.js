import React from "react"
class DetallePelicula extends React.Component
{
    render()
    {
        const {nombre, genero} = this.props.datos

        return(
            <li>Titulo: { nombre }, Genero: { genero}</li>
        )
    }
}

export default DetallePelicula