import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NFTMarketplace from './pages/NFTMarketplace';
import DAO from './pages/DAO';

const App = () => {
    return (
        <Router>
            <div className="app">
                <div className="content">
                    <Switch>
                        <Route exact path="/" component={NFTMarketplace} />
                        <Route path="/dao" component={DAO} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;
