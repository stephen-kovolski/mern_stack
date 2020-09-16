import React from 'react'

export default function Input(props) {                  //placeholder, typeof, onChange, name, id


    return (
        <input 


            id={props.id}
            name={props.name}
            onChange={props.onChange}
            type={props.type}
            placeholder={props.ph}  //ph stands for place holder
            style={{...defaultStyle, ...props.style}}

        />
    )
}

    const defaultStyle = {
        color: 'white',
        backgroundColor: 'light blue',
        border: 'none',
        padding: 10,
        borderRadius: 5,
}
