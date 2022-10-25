import React, { useState, lazy,Suspense,useEffect } from "react";

import Header from "./components/Header"
import {  Redirect, Route,Switch,Router } from "react-router-dom";
import {createBrowserHistory} from "history"

const MarketingLazy= lazy(()=> import("./components/MarketingApp"))
const AuthLazy= lazy(()=> import("./components/AuthApp"))
const DashboardLazy= lazy(()=> import("./components/DashboardApp"))

const history= createBrowserHistory();

const App=()=>{
  const [isSignedIn,setIsSignedIn]= useState(false);

  useEffect(() => {
    if(isSignedIn){
        history.push("/dashboard")
    }
  }, [isSignedIn])
  
    return (
        <Router history={history}>
            <Header isSignedIn={isSignedIn} onSignOut={()=> setIsSignedIn(false)}/>
            <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path="/auth">
                    <AuthLazy onSignIn={()=>setIsSignedIn(true) }/>
                </Route>
                <Route path="/dashboard">
                    {!isSignedIn && <Redirect to="/"/>}
                    <DashboardLazy />
                </Route>
                <Route path="/" component={MarketingLazy}/>
               
            </Switch>
            </Suspense>
        </Router>
    )
}

export default App;
