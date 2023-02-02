
//  using object props

type PersonProps = {
  name: {
    firstName: string,
    lastName: string
  }
}

export default function Person ({name}: PersonProps) {

    return (
        <div>
            {name.firstName}
        </div>
    )
}