import React from "react"
import { ImgHTMLAttributes } from "react"
class DetallePelicula extends React.Component
{
    render()
    {
        const {nombre, genero, img} = this.props.datos

        return(
            
            <div class="col">
                <div class="card text-center text-white bg-dark border-light h-100">
                    <img src={img} class="card-img-top" alt=""/>
                    <div class="card-body bg-gradient">
                        <h5 class="card-title">{ nombre }</h5>
                        <p class="card-text">{ genero }</p>
                    </div>
                </div>
            </div>


           
        )
    }
}

export default DetallePelicula