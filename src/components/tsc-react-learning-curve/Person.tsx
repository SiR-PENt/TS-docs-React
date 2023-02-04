import { PersonProps } from "./Types/Person.types"
//  using object props

export default function Person ({name}: PersonProps) {

    return (
        <div>
            {name.firstName}
        </div>
    )
}