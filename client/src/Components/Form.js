import React from 'react'
import Input from './Input'
import Button from './Button'

export default function Form(props) {

    const buttonOnCLick = () => {
        props.submitFunc(document.getElementById(props.id))
    }
    
    return (

    <div>
        <h2>
            {props.title}
        </h2>
        <form
        id={props.id}
        >
            {
                    Array.isArray(props.inputs) ?
                    props.inputs.map((inProps, index ) => {
                        return(
                            <Input
                                key={index}
                                name={inProps.name}
                                ph={inProps.ph}
                                type={inProps.type}
                                style={inProps.style}
                                id={inProps.id}
                                onChange={inProps.onChange}
                            />
                        )
                        
                    }) : null
                }

        </form>

            <Button

            text='Submit'
            onClick={buttonOnCLick}
            style={{color: 'white'}}

            />




    </div>
    )
}


