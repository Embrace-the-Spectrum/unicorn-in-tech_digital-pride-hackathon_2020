import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Unknown from './pages/Unknown';
import Header from './layout/Header';
import Navigation from './layout/Navigation';
import './App.css';


const App = () => {
    return (
        <BrowserRouter>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
            <div className="app">
                <Header/>
                <Navigation/>
                <Switch>
                    <Route exact path="/">
                        <div>
                            <h2>Welcome</h2>
                            <h3>I am a...</h3>
                        </div>
                    </Route>
                    <Route exact path="/protest">
                        <div>
                            <h2><button type="button" class="btn btn-outline-light">SPEAKER</button></h2>
                            <h4><button type="button" class="btn btn-outline-light">LISTENER</button</h4>
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
