import React from "react";
import { NavLink } from "react-router-dom";

export interface ItemOfNavigation {
    srcImg: string,
    srcImgActive: string,
    title: string,
    href: string,      
}


export default function ItemOFNavigation(props: ItemOfNavigation){
    // const clickItem = (event: React.MouseEvent)=>{
    //     console.log((event.target as HTMLDivElement).tagName)
    // }

    return(
         
            <NavLink
                to={props.href}
                className={({ isActive }) =>(isActive ? "link activeLink" : "link")}
                children={({ isActive }) => {
                    const img = isActive ? props.srcImgActive : props.srcImg;
                    return (
                      <div className="itemOFNavigation">
                        <img src={img} alt={props.title}></img>
                        <p>{props.title}</p>
                      </div>
                    );
                  }}
            />  
      
    )
}