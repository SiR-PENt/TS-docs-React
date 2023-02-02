//  using arays of objects

type PersonListProp = {
    names: {
      first: string,
      last: string
    }[]
}

export default function PersonList({names}: PersonListProp) {

    return (
          <div>
            {       
          names.map(name => {
                const {first, last } = name
                return <h2>{first}, {last}</h2>
            })
            }
        </div>
    )
}