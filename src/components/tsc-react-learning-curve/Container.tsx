// style as props: styles have their own datatypes

type ContainerProps = {
    style: React.CSSProperties;
}


export default function Container({style}: ContainerProps) {

    return (
      <div style={style}>
        Text Content Goes Here
      </div>
    )
}