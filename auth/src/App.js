import React from "react"
import {Switch,Route,Router } from "react-router-dom";

import {StylesProvider} from "@material-ui/core/styles";


import SignUp from "./components/Signup"
import SignIn from "./components/Signin"


const App= ({onSignIn, history}) =>{
return (<div>
    <StylesProvider>
        <Router history={history}>
            <Switch>
                <Route exact path="/auth/signin">
                    <SignIn onSignIn={onSignIn}/>
                    </Route>
                <Route exact path="/auth/signup">
                    <SignUp onSignIn={onSignIn}/>
                </Route>
            </Switch>
        </Router>
    </StylesProvider>
</div>)
}

export default App;