import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Home from './core/pages/Home';
import Perfil from './core/pages/Perfil';

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch >
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/perfil">
                <Perfil />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;