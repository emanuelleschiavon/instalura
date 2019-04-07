import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css';
import { Router, Route, browserHistory } from 'react-router'
import Logout from './components/Logout'
import Login from './components/Login'

function verificaAutorizacao(nextState, replace) {
    if (localStorage.getItem('auth-token') === null) {
        replace('/?msg=você precisa estar logado para acessar o endereço');
    }
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={Login}></Route>
        <Route path='/timeline' component={App} onEnter={verificaAutorizacao}></Route>
        <Route path='logout' component={Logout}></Route>
    </Router>




    , document.getElementById('root'));