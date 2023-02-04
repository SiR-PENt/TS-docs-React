import { useReducer } from 'react';

const initialState = { count: 0 };

// giving the state and the action dataTypes

type CounterState = {
  count: number,
}
//  in order to get an action that utilizes payload or not, we use discriminated unions.
//  i.e in cases where we don't need a payload

type UpdateState = {
  type: 'increment' | 'decrement' , 
  payload: number
}

type ResetState = {
    type: 'reset'
}

type ActionType = UpdateState | ResetState


function reducer( state: CounterState, action: ActionType ) {
    switch(action.type) {
        case 'increment': 
          return { count: state.count + action.payload }
        case 'decrement': 
          return { count: state.count - action.payload }
        case 'reset': 
          return initialState
        default: 
          return state       
    }
}

export const Counter = () => { //if you need to dispatch state and dispatch as to a component, all you need to do is 
  // hover on the state and dispatch variable to get their data types

    const [ state, dispatch ] = useReducer( reducer, initialState )
    return (
        <>
         Count: {state.count}
         <button onClick={() => dispatch({type: 'increment', payload: 10})}>
            increment by 10
         </button>
         <button onClick={() => dispatch({type: 'decrement', payload: 10})}>
            decrement by 10
         </button>
         <button onClick={() => dispatch({type: 'reset'})}>
            decrement by 10
         </button>
        </>
    )
}