// DOM references

import { useRef, useEffect } from "react";

export const DomRef = () => {

    const inputRef = useRef<HTMLInputElement>(null!) 
    
    //  for mutable DOM references, pass the htmlelement as type
    //! after null symbolizes non-null type assertion

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (

        <div>
        <input type='text' ref={inputRef}/>
        </div>
    )
}