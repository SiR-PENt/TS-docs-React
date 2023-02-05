export type ProfileProps = {
   name: string
}

export default function Profile({name}: ProfileProps) {

    return (
        <p>
            Private Profile Component: Name is {name}
        </p>
    )
}