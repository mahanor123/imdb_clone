const initialState = {
  user: undefined
};

const LogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNIN":
      return {
        ...state,
        user: action.payload
      };
    case "SIGNOUT":
      return {
        ...state,
        user: undefined
      };
    default:
      return state;
  }
};
export default LogReducer;
