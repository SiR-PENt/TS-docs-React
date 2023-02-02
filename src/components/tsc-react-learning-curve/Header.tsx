//  Passing children as props
type HeaderProps = {
  children: string
}
export default function Header({children}: HeaderProps) {

    return (
      <h2>
        Placeholder text
      </h2>
    )
}