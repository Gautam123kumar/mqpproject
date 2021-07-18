import React, { Component } from 'react'
import { BrowserRouter as Router,Route} from "react-router-dom";
import ForgotPassword from './AuthenticationTemplate/ForgotPassword';
import Login from './AuthenticationTemplate/Login'
import SignUp from './AuthenticationTemplate/SignUp';
class Routes extends Component {
    render() {
        return (
            <Router>
                <switch>
                    <Route exact path ="/" component={Login} />
                    <Route exact path = "/signUp" component={SignUp} />
                    <Route exact path ="/forgotPassword" component={ForgotPassword} />
                </switch>
            </Router>
        )
    }
}

export default Routes;
