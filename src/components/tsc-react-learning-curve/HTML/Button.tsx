type ButtonProps = {
    variant: 'primary' | 'secondary',
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'> //omit takes an object type and removes the specified properties. 
// Here, we want to restrict the children types to just strings and not nodes


export default function CustomButton({ variant, children, ...rest  }: ButtonProps) {
    
    return (
      <button className={`class-with-${variant}`} {...rest}>
        {children}
      </button>
    )
}
