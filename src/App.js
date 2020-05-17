import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./apollo-client";

import Unknown from './pages/Unknown';
import Header from './layout/Header';
import Navigation from './layout/Navigation';
import PostContainer from './PostContainer';

import './App.css';

const App = () => {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
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
                                <h2>SPEAKER</h2>
                                <h4>LISTENER</h4>
                            </div>
                        </Route>
                        <Route exact path="/posts">
                            <div>
                                <h2>Posts</h2>
                                <PostContainer />
                            </div>
                        </Route>
                        <Route exact path="/404" component={Unknown}/>
                        <Redirect from="/*" to="/404"/>
                    </Switch>
                </div>
            </BrowserRouter>
          <PostContainer />
        </ApolloProvider>
    );
}

export default App;
