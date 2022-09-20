export const nurbekReducer = (state, action) => {
  switch (action.type) {
    case "AddOne":
      return { ...state, count: state.count + 1 };
    case "addAmount":
      return { ...state, name: action.payload.name };
    case "AddNumber":
      return { ...state, count: +state.name + state.count };
  }
};
