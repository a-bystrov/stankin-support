import React, { useState } from "react";

export default function ItemOfDescriptionAudience(props: {title: string, children: React.ReactNode}) {
    const [open, setOpen] = useState(false)
      
    function clickHandler(){
        setOpen(!open)
    }
    return(
        <div className="itemOfDescriptionAudience" onClick={clickHandler}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <p style={{fontWeight: '600'}}>{props.title}</p><p>v</p>
            </div >
            { open &&
                props.children
            }
        </div>
    )
}