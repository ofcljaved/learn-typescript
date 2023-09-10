// import { useReducer } from 'react';
// import { ThemeProvider } from './context/ThemeContext';
// import { reducer } from './reducer/reducer';

// const initalState = {
//   count: 0,
// };
// function App() {
//   const [state, dispatch] = useReducer(reducer, initalState);

//   const increment = (): void => {
//     dispatch({
//       type: 'INCREMENT',
//       payload: 1,
//     });
//   };
//   const decrement = (): void => {
//     dispatch({
//       type: 'DECREMENT',
//       payload: 1,
//     });
//   };
//   return (
//     <ThemeProvider>
//       <h1>Count Change</h1>
//       <h2>Count: {state.count}</h2>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//     </ThemeProvider>
//   );
// }

import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  StateType,
  decrement,
  increment,
  incrementByValue,
} from './redux/redux';

function App() {
  const [value, setValue] = useState<number>(0);
  const count = useSelector((state: StateType) => state.count);
  const dispatch = useDispatch();

  const incrementByValueHandler = () => {
    dispatch(incrementByValue(value));
  };
  console.log(count);

  return (
    <>
      <h1>Count Change(REDUX)</h1>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          setValue(Number(e.target.value));
        }}
      />
      <button onClick={incrementByValueHandler}>Add</button>
    </>
  );
}

export default App;
