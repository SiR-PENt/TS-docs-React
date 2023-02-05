import { useState, useRef, useEffect } from "react"


export default function MutableRef() {
   
    const [ timer, setTimer ] = useState(0)
    const intervalRef = useRef<number | undefined>(undefined) 
    // hover on the clearInterval function to see why undefined was passed as a dataType in useRef


    const stopTimer = () => {
        window.clearInterval(intervalRef.current)
    }

    useEffect(() => {
       intervalRef.current = window.setInterval(() => {
         setTimer((timer) => timer + 1)
       }, 1000)

       return () => {
        stopTimer()
       }
    }, [])

    return (
       <div>
        Hooktimer - {timer} - 
        <button onClick={() => stopTimer()}>
          Stop Timer  
        </button>
       </div>
    )
}