import React from "react";
import routes from "../routes";

const MenuBar = () =>{
    
    const style:string = "inline-block";
    return (
        <>
            <ul>
            {
                routes.map((route,key)=>{
                    return <li className={style} key={key}><a href={route.path}>{route.name}</a></li>;
                })
            }
            </ul>
        </>
    );
}

export default MenuBar;