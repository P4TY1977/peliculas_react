import React from "react"
import {Link} from 'react-router-dom'
import DetallePelicula from './DetallePelicula'
class Home extends React.Component
{
    render()
    {
        const usuario = {nombre: 'Santiago', email:'santiago@email.com', edad: 20}
        const peliculas = 
        [
            {nombre: 'Nightmare on Elm Street', genero: 'Terror', clasificacion: 'C'},
            {nombre: 'Bambi', genero: 'Infantil', clasificacion: 'A'},
            {nombre: 'La hora del lobo', genero: 'Terror', clasificacion: 'C'}            
        ]
        const peliculasAdolAdultos= peliculas.filter(pelicula => pelicula.clasificacion != 'A')
           
        
        return(  //siempre paréntesis para que no se confunda el compilador
            <div>
                home
                <br/>
                <Link to="/peliculas">Peliculas</Link>
                <br/>
                <div>
                    Nombre: {usuario.nombre.toUpperCase()}
                </div>
                <div>
                    Correo: {usuario.email}
                </div>
                <div>
                    Edad: {usuario.edad}
                </div>
                <div>
                    <h3>Titulos</h3>
                        <ul>
                        { peliculasAdolAdultos.map(pelicula=>(
                            <DetallePelicula datos={pelicula}/>
                        )) }
                        </ul>
                </div>
            </div>
        )
    }
}
export default Home