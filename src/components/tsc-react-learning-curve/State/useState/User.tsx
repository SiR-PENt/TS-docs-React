//  Informing typeScript of future types with union types

import { useState } from "react";

type AuthUser = {
   name: string,
   email: string
}

export default function User() {
    // const [ user, setUser ] = useState<AuthUser | null>(null)

    const [ user, setUser ] = useState<AuthUser>({} as AuthUser)  //type assertion example

    const handleLogIn = () => {
        setUser({
            name: 'Suko',
            email: 'suko@sample.com'
        })
    }
    // const handleLogOut = () => {
    //     setUser(null)
    // }

    return (
        <div>
            <button onClick={handleLogIn}>Login</button>
            {/* <button onClick={handleLogOut}>LogOut</button> */}
            <p>User name is {user?.name}</p>
            <p>User email is {user?.email}</p>
        </div>
    )
}