import { useReducer } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { reducer } from './reducer/reducer';

const initalState = {
  count: 0,
};
function App() {
  const [state, dispatch] = useReducer(reducer, initalState);

  const increment = (): void => {
    dispatch({
      type: 'INCREMENT',
      payload: 1,
    });
  };
  const decrement = (): void => {
    dispatch({
      type: 'DECREMENT',
      payload: 1,
    });
  };
  return (
    <ThemeProvider>
      <h1>Count Change</h1>
      <h2>Count: {state.count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </ThemeProvider>
  );
}

export default App;
