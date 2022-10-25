import React, { useEffect, useRef }  from 'react';
import {mount} from "auth/AuthApp";
import {  useHistory } from "react-router-dom";
 const AuthApp = ({onSignIn}) => {
    const history= useHistory();
    const ref= useRef(null);

    useEffect(()=>{
       const {onParentNavigation}= mount(ref.current,{
            onNavigate:({pathname:nextPathName})=>{
            const {pathname}= history.location;
              if(pathname!==nextPathName) { 
                    history.push(nextPathName);
                }
            },
            onSignIn,
            initialPath: history.location.pathname
        });
        history.listen(onParentNavigation);
    },[])
  return (
    <div ref={ref}/>
  )
}

export default AuthApp
