import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Footer from './footer'
import Home from './home'
import ListadoPeliculas from './peliculas/listado'

ReactDOM.render
(
  <HashRouter>
    <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/peliculas" component={ ListadoPeliculas }/>
      </Switch>
      <Footer/>  {/*no cambia en todas las páginas*/}
    </div>
  </HashRouter>
  ,
  document.getElementById('base')
)
