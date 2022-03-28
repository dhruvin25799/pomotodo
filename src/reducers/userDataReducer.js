export const userDataReducer = (state, action) => {
  switch (action.type) {
    case "USER_ADD": {
      return {
        ...state,
        user: { ...state.user, isNew: false, name: action.payload },
      };
    }
    case "TASK_ADD": {
      return { ...state, tasks: [...state.tasks, action.payload] };
    }
    case "TASK_REMOVE": {
      return {
        ...state,
        tasks: state.tasks.filter((item) => item._id !== action.payload._id),
      };
    }
    case "GET_LOCAL": {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};

export const initialUserData = {
  user: {
    isNew: true,
    name: "",
  },
  tasks: [],
};
