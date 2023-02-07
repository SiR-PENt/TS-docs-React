
//UNRESTRICTED

// type RandomNumber = {
//     value: number,
//     isPositive?: boolean,
//     isNegative?: boolean,
//     isZero?: boolean,
// }

// RESTRICTED

type RandomNumber = {
   value: number
}

type Positive = RandomNumber & {
    isPositive: boolean,
    isNegative?: never,
    isZero?: never 
}

type Negative = RandomNumber & {
    isNegative: boolean,
    isPositive?: never,
    isZero?: never 
}

type Zero = RandomNumber & {
    isZero: boolean,
    isPositive?: never,
    isNegative?: never,
    
}

type RandomNumberProp =  Positive | Negative | Zero //this signifies that only one of positive, negative or zero can be passed as a parameter
// and when one of the is passed as prop, the others defaults to never as seen in their code block


export const RandomNumber = ({ value, isPositive, isNegative, isZero}: RandomNumberProp) => {

    return (
        <div>
            {value} {isPositive && 'positive'} {isNegative && ' '}
            { isZero && 'zero'}

        </div>
    )
}