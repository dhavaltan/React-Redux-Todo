const intialState = {
  todos: []
};

const rootReducer = (state = intialState, action) => {
  if (action.type === "DELETE_TODO") {
    const todos = state.todos.filter((todo, index) => {
      return action.index !== index;
    });
    return {
      todos: todos
    };
  } else if (action.type === "ADD_TODO") {
    const last = state.todos.length;
    var todo = {};
    if (last === 0) {
      todo = {
        id: 1,
        name: action.todoName
      };
    } else {
      todo = {
        id: state.todos[last - 1].id + 1,
        name: action.todoName
      };
    }
    return {
      todos: [...state.todos, todo]
    };
  }

  return state;
};

export default rootReducer;
