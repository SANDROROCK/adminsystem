import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Login from  './pages/login';
import Cadastro from './pages/cadastro';
import Home from './pages/home';
import Cliente from './pages/clientes';
import ClientesCad from './pages/clientescad';

const router = () => {
    return (
      <BrowserRouter>
      <Switch>
          <Route path='/'exact component={Login} />
          <Route path='/login'  component={Login} />
          <Route path='/cadastro' component={Cadastro} />
          <Route path='/home' component={Home} />
          <Route path='/clientes' component={Cliente} />
          <Route path='/novoCliente' component={ClientesCad} />
      </Switch>
      </BrowserRouter>
    )
}

export default router
