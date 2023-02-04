//  using arays of objects
import { Name } from "./Types/Person.types"
type PersonListProp = {
    names: Name[]
}

export default function PersonList({names}: PersonListProp) {

    return (
      
         <div>
            {       
          names.map(name => {
                const {firstName, lastName } = name
                return <h2>{firstName}, {lastName}</h2>
            })
            }
        </div>
    )
}