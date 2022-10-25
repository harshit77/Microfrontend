import React from  "react";
import ReactDOM from "react-dom";
import App from "./App";
import {createMemoryHistory,createBrowserHistory} from "history"


const mount= (el,{onNavigate,defaultHistory,initialPath})=>{
    const history= defaultHistory || createMemoryHistory({
initialEntries:[initialPath]
    });
    onNavigate && history.listen(onNavigate)
    ReactDOM.render(<App history={history}/>,el);
    return {
        onParentNavigation({pathname:nextPathName}){
            const {pathname}= history.location;
            if(pathname!==nextPathName) {
               history.push(nextPathName)
            }
         
        }
    }
}

if(process.env.NODE_ENV === "development") {
   const devRoot= document.getElementById("_marketing-dev-root");
   devRoot &&  mount(devRoot,{defaultHistory: createBrowserHistory()});
}

export {mount}