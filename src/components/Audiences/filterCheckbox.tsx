import React from "react"

interface IFilterCheckbox {
    title: string,
    items: {title: string, nameForm: string}[],
}

interface propsFilterCheckbox {
    filter: IFilterCheckbox,
    handlerChange: (e:React.FormEvent<HTMLInputElement>)=>void
}

export default function FilterCheckbox({ filter, handlerChange}: propsFilterCheckbox) {
    return(
        <div className="filterCheckbox filter">
            <p><b>{filter.title}</b></p>
            <p>{filter.items.map((item)=><><input type="checkbox" className="custom-checkbox" name={item.nameForm} id={item.nameForm} onChange={handlerChange}/><label htmlFor={item.nameForm}>{item.title}</label><br></br></>)}</p>
            <p className="more">Еще ↓</p>
        </div>
    )
}