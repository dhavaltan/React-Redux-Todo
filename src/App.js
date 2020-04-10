import React, { Component } from "react";
import "./App.css";
import Todoform from "./components/Todoform";
import Todo from "./components/Todo";
import { connect } from "react-redux";

export class App extends Component {
  addToDo = todoName => {
    this.props.addToDo(todoName);
  };

  deleteTodo = index => {
    this.props.deleteTodo(index);
  };

  render() {
    const { todos } = this.props;

    return (
      <React.Fragment>
        <h1 className="AppTitle">Todo App</h1>
        <Todoform addToDo={this.addToDo} />

        {todos.map((todo, index) => {
          return (
            <Todo
              deleteTodo={() => this.deleteTodo(index)}
              key={todo.id}
              name={todo.name}
              id={todo.id}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: index => {
      dispatch({ type: "DELETE_TODO", index: index });
    },
    addToDo: todoName => {
      dispatch({ type: "ADD_TODO", todoName: todoName });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
