import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Unknown from './pages/Unknown';
import Header from './layout/Header';
import Navigation from './layout/Navigation';
import './App.css';


const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <Navigation/>
                <Switch>
                    <Route exact path="/">
                        <div>
                            <h2>Henlo</h2>
                            <h3>Stuff will go here...</h3>
                        </div>
                    </Route>
                    <Route exact path="/protest">
                        <div>
                            <h2>Rawr fite me!</h2>
                            <h4>Go with friends!</h4>
                        </div>
                    </Route>
                    <Route exact path="/404" component={Unknown}/>
                    <Redirect from="/*" to="/404"/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
