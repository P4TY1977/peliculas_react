import React from "react"
class Footer extends React.Component
{
    render()
    {
        return(  //siempre paréntesis para que no se confunda el compilador
            <div class="row">
                <div class="col-12 text-center mt-5">
                    Copyright &#169;
                </div>
            </div>
        )
    }
}
export default Footer