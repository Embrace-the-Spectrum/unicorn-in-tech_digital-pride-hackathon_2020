import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './layout/Header';
import './App.css';


const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <Route exact path="/">
                    <div>
                        <h2>Henlo</h2>
                    </div>
                </Route>
                <Route path="/protest">
                    <div>
                        <h2>Rawr fite me!</h2>
                    </div>
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
