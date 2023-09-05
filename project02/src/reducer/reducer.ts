type StateType = { count: number };

type ActionType =
  | {
      type: 'INCREMENT';
      payload: number;
    }
  | {
      type: 'DECREMENT';
      payload: number;
    };

export const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.payload };
    case 'DECREMENT':
      return { count: state.count - action.payload };
    default:
      return state;
  }
};
