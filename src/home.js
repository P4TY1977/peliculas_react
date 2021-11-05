import React from "react"
import {Link} from 'react-router-dom'
import DetallePelicula from './DetallePelicula'
class Home extends React.Component
{
    render()
    {
              
        return(  //siempre paréntesis para que no se confunda el compilador
            <div class="col-12">
                <div class="row justify-content-center gap-3">
                <div class="col-3 border border-light rounded-3 p-3">
                    <img class="img-fluid" src="images/infantil.jpg"/>
                    <div class="text-center mt-5">
                        <Link to="/peliculas/A" class="link-light">Peliculas Infantiles</Link>
                    </div>
                </div>
                <div class="col-3 border border-light rounded-3 p-3">
                <img class="img-fluid" src="images/adolescentes.jpg"/>
                <div class="text-center mt-5">
                    <Link to="/peliculas/B" class="link-light">Peliculas para Adolescentes</Link> 
                </div>
              </div>
              <div class="col-3 border border-light rounded-3 p-3 align-content-center">
              <img class="img-fluid" src="images/adultos.jpg"/>
              <div class="text-center mt-5">
                <Link to="/peliculas/C" class="link-light">Peliculas para Adultos</Link>
               </div>
              </div>
                
                </div>               
            </div>
        )
    }
}
export default Home