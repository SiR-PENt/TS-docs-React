//  extracting props from components

import Greeting from '../Greeting'

export default function CustomComponent(props: React.ComponentProps<typeof Greeting>) {

    return (
        <div>
         {props.message}
        </div>
    )
}