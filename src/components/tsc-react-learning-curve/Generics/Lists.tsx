//  Generic Props

type ListProps<T> = {
    items: T[],
    onClick:(value: T) => void,
}

export default function Lists<T extends { id: number, first: string }>({ items, onClick }: ListProps<T>) {

    return (
       <div>
        <h2>List of items</h2>
        {items.map((item, index) => {

            return (
                <div key={item.id} onClick={() => onClick(item)}>
                   <p>{item.first}</p>
                </div>
            )
        })}
       </div>
    )
} 