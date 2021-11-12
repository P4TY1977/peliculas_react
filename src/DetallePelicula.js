import React from "react"
import { ImgHTMLAttributes } from "react"
class DetallePelicula extends React.Component
{
    render()
    {
        const {nombre, genero, img} = this.props.datos

        return(
            
            <div className="col">
                <div className="card text-center text-white bg-dark border-light h-100">
                    <img src={img} className="card-img-top" alt=""/>
                    <div className="card-body bg-gradient">
                        <h5 className="card-title">{ nombre }</h5>
                        <p className="card-text">{ genero }</p>
                    </div>
                </div>
            </div>


           
        )
    }
}

export default DetallePelicula