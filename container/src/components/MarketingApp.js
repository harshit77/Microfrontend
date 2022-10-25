import React, { useEffect, useRef }  from 'react';
import {mount} from "marketing/MarketingApp";
import {  useHistory } from "react-router-dom";
 const MarketingApp = () => {
    const history= useHistory();
    const ref= useRef(null);

    useEffect(()=>{
       const {onParentNavigation}= mount(ref.current,{
          initialPath:history.location.pathname,
            onNavigate:({pathname:nextPathName})=>{
            const {pathname}= history.location;
              if(pathname!==nextPathName) { 
                    history.push(nextPathName);
                }
            }
        });
        history.listen(onParentNavigation);
    },[])
  return (
    <div ref={ref}/>
  )
}

export default MarketingApp
