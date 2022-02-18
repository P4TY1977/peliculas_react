import { inject, observer } from "mobx-react"
import React from "react"
import {Link} from 'react-router-dom'

class EdicionPelicula extends React.Component
{
    constructor(props){
        super(props)
        const {match, peliculas}=props
        if (match.params.id != props.peliculas.seleccionado.id)       
            peliculas.seleccionar(match.params.id)
        
    }

   aplicar(event)
   {
    const {seleccionado}= this.props.peliculas
    seleccionado[event.target.name]= event.target.value
   }
    render()
    {
        const {seleccionado}= this.props.peliculas
        
        return(  //siempre paréntesis para que no se confunda el compilador
            <div>
            <form> 
                <div>
                    <strong>Nombre:</strong>
                    <input name="nombre" type="text" value ={seleccionado.nombre} onChange={event => {this.aplicar(event)}}/>
                </div>  
                <div>
                    <strong>Clasificacion:</strong>
                    <select name="clasificacion" value={ seleccionado.clasificacion} onChange={ event => {this.aplicar(event)}}>
                        <option value="A">Infantil</option>
                        <option value="B">Adolescentes</option>
                        <option value="C">Adultos</option>
                    </select>
                </div> 
                
            </form>   
            <Link to={`/peliculas/${seleccionado.clasificacion}` } className="btn btn-outline-light mt-5 mb-5"><i className="bi bi-reply-fill display-4"></i></Link>
            </div>
            
        )
    }
}
export default inject('peliculas')(
    observer(EdicionPelicula)
)