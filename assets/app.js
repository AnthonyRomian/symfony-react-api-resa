import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import 'react-toastify/dist/ReactToastify.css';

// any CSS you import will output into a single css file (app.css in this case)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/normalize.css';
import './styles/app.css';

// start the Stimulus application
import { HashRouter, Route, Switch} from "react-router-dom";

import AuthAPI from "./js/services/AuthAPI";
import AdminPage from "./js/page/admin/AdminPage";
import HomePage from "./js/page/client/HomePage";

AuthAPI.setup();

const App = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(
        AuthAPI.isAuthenticated()
    );

    return (

        <Switch>
            <Route path="/admin" component={AdminPage}/>
            <Route path="/" component={HomePage}/>
        </Switch>

    );
};

const rootElement = document.querySelector('#app');
ReactDOM.render(
    <HashRouter>
        <App/>
    </HashRouter>, rootElement);
