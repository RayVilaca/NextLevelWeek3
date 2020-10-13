import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import OrphanageMap from './pages/OrphanageMap';


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Landing} exact></Route>
                <Route path="/app" component={OrphanageMap}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;