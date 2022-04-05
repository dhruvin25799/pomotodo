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
    case "TAG": {
      return { ...state, tag: action.payload };
    }
    case "TAG_ADD": {
      return { ...state, tags: [...new Set([...state.tags, action.payload])], tag: "" };
    }
    case "TAG_REMOVE": {
      return {...state, tags: state.tags.filter(item => item!==action.payload)};
    }
    case "RESET": {
      return initialModalInput;
    }
    default:
      return state;
  }
};

export const initialModalInput = {
  name: "",
  desc: "",
  time: 60,
  tags: [],
  tag: "",
};
