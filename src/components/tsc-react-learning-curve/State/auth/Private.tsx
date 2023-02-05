import Login from "./Login"
import { ProfileProps } from "./Profile"

type PrivateProps = {
    isLoggedIn: boolean,
    component: React.ComponentType<ProfileProps> // pass the props to it
}
export default function Private({ isLoggedIn, component: Component}: PrivateProps) {
    if(isLoggedIn) {
        return  <Component name='suko'/>
    }
    else {
      return <Login/>
    }
}