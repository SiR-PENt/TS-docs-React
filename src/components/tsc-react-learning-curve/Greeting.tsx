
//  Using Props

type GreetProps = {
  name: string,
  // below is also an example to pass an optional variable
  message?: number
}

export default function Greeting({name, message}: GreetProps) {
   //if we want to set a default value for message, we can
   message = 0  

    return (
     <p>Hello {name}, and Welcome. You have {message} messages.</p>
    )
}