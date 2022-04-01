export const userDataReducer = (state, action) => {
  switch (action.type) {
    case "USER_ADD": {
      return {
        ...state,
        user: { ...state.user, isNew: false, name: action.payload },
      };
    }
    case "TASK_ADD": {
      return { ...state, tasks: [...state.tasks, {...action.payload, timeElapsed: 0}] };
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
    case "TASK_TIME" : {
      return{...state, tasks: state.tasks.map(item => item._id === action.payload.task._id ? {...item, timeElapsed: action.payload.timeElapsed} : item)}
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
