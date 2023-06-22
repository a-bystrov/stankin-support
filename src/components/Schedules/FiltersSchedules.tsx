import React, { useState } from "react";

interface PropsFiltersSchedules {
    changeSearch: (event:React.ChangeEvent, search: string)=>void,
    changeDate: (event:React.ChangeEvent, search: string)=>void,
}

export default function FiltersSchedules(props: PropsFiltersSchedules) {
    let [searcPlaceholder, setSearcPlaceholder] = useState('Аудитория')


    function clickTypeSchedule(event: React.MouseEvent<HTMLDivElement>) { 
        event.currentTarget.querySelectorAll('button').forEach((item)=>{item.style.background = 'white'})
        let target = event.target as HTMLButtonElement
        target.style.background = '#f3f3f3'
        setSearcPlaceholder(target.innerHTML)
    }
    
    function handlerChangeDate(event: React.ChangeEvent) {
        const target = event.target as HTMLInputElement;
        const value = target.value;
        
        props.changeDate(event, value)
    }

    function handlerChangeSearch(event: React.ChangeEvent) {
        const target = event.target as HTMLInputElement;
        const value = target.value;
        
        props.changeSearch(event, value)
    }


    return(
        <div className="filtersSchedules">
            <div className="typesOfSchedules" onClick={clickTypeSchedule}>
                <button style={{background: '#f3f3f3'}}>Аудитория</button>
                <button>Группа</button>
                <button>Преподаватель</button>
                
            </div>
            <input className="search" type="text" placeholder={searcPlaceholder} onChange={handlerChangeSearch}/>
            <input className="date" type="date" onChange={handlerChangeDate}/>
            <div>
                <button className="arrow">←</button>
                <button className="arrow">→</button>
            </div>
        </div>
    )
}