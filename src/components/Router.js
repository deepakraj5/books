import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Authors from './Authors';
import Books from './Books';
import Navbar from './Navbar';
import Profile from './Profile';
import Settings from './Settings';


const Router = () => {
    return (
        <div>

            <BrowserRouter>

                <Navbar />
            
                <Switch>

                    <Route path="/books" component={Books} exact />
                    <Route path="/authors" component={Authors} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/profile" component={Profile} />
                    
                </Switch>

            </BrowserRouter>

        </div>
    );
}


export default Router