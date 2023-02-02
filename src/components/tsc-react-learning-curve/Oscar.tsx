import { ReactNode } from "react"

//  props as node
type OscarProps = {
  children: ReactNode
}
export default function Oscar({children}: OscarProps) {

    return (
    <p>{children}</p>
    )
}