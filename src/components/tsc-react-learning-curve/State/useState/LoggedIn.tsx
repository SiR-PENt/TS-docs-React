import { useState } from "react"
// In typescript, you dont have to explicitly type the datatype useState hook

export default function LoggedIn() {
    const [ loggedIn, setLoggedIn ] = useState(true)

    const handleLogIn = () => {
        setLoggedIn(true)
    }
    const handleLogOut = () => {
        setLoggedIn(false)
    }

    return (
        <div>
            <button onClick={handleLogIn}>Login</button>
            <button onClick={handleLogOut}>Login</button>
            <p>User is {loggedIn ? 'LoggedIn' : 'LoggedOut'}</p>
        </div>
    )
}