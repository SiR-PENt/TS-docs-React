
type Horizontal = 'left' | 'center' | 'right'
type Vertical = 'top' | 'center' | 'bottom'

type PositionProp = {
   position: Exclude<`${Horizontal}-${Vertical}`, 'center-center'> | 'center' //cannot use center-center or just use center instead 
}


export default function Toast({ position }: PositionProp) {

    return (
          <div>
            Toast Notification Position - {position}
          </div>
    )
}