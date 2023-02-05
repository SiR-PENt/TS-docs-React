import { useContext } from "react"
import { UserContext } from "./UserContext"

export default function User() {

    const userContext = useContext(UserContext)

    const handleLogIn = () => {

          userContext.setUser({
            name: 'Suko',
            email: 'suko@example.com'
          })
       
    }
    const handleLogOut = () => {    
            if(userContext) {
                userContext.setUser(null)
             }
    }


    return (
         <div>
            <button onClick={handleLogIn}>
             Log In
            </button>
            <button onClick={handleLogOut}>
             Log Out
            </button>
            <div>
                User name is {userContext.user?.name}
                User name is {userContext.user?.email}
            </div>
         </div>
    )
}