
type InputProps = React.ComponentProps<'input'>

export default function CustomInput(props: InputProps) {

    return (
        <input {...props}/>
    )
}