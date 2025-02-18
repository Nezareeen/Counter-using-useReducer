import React, { useReducer } from 'react'

const initialState = {
  count : 0
}

const reducer = (state,action) => {
  switch(action.type){
    case "+" : return{...state,count:state.count+action.payload};

    case "-" : return{...state,count:state.count-action.payload};

    default : return state;
  }
}

const App = () => {
  const [state,dispatch] = useReducer(reducer,initialState);

  const increment = () => {
    dispatch({type:"+",payload:1});
  }

  const decrement = () => {
    dispatch({type:"-",payload:1});
  }
  return (
    <div>
      <h1>Count : {state.count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default App
