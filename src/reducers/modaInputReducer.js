export const modalInputReducer = (state, action) => {
  switch (action.type) {
    case "NAME": {
      return { ...state, name: action.payload };
    }
    case "DESC": {
      return { ...state, desc: action.payload };
    }
    case "TIME": {
      return { ...state, time: +action.payload };
    }
    case "RESET": {
      return initialModalInput;
    }
    default:
      return state;
  }
};

export const initialModalInput = { name: "", desc: "", time: 60 };
