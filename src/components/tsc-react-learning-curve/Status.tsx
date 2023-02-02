//  using union types

type StatusProps = {
    status: 'loading' | 'success' | 'failed'
}

export default function Status({status}: StatusProps) {
    let message;
    if(status === 'loading') message = 'loading'
    else if(status === 'success') message = 'success'
    else if(status === 'failed') message = 'failed'

  return (
     <h2>Status : {message}</h2>
  )
}