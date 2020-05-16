import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';


const App = () => {
    return (
        <BrowserRouter>
            <Route exact path="/">
                <div className="app">
                    <header className="app-header">
                        <img src={logo} className="app-logo" alt="logo"/>
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <a
                            className="app-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                    </header>
                </div>
            </Route>
            <Route path="/protest">
                <div>
                    <h1>Rawr fite me!</h1>
                </div>
            </Route>
        </BrowserRouter>
    );
}

export default App;
