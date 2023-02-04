import React from 'react'

type ButtonProp = {
    handleClick: (event:React.MouseEvent<HTMLButtonElement>, id:number ) => void, //if you want to pass parameters. like the event parameter in this case
    
}


export default function ButtonComponent({handleClick}: ButtonProp) {
    
    return (
        <button onClick={(event) => handleClick(event, 1)}>
            Click Me
        </button>
    )
}