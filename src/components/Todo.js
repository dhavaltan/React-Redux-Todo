import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import "./Todo.css";
import Button from "@material-ui/core/Button";

export class Todo extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Todo">
          <Typography variant="h5" gutterBottom>
            {this.props.name}
          </Typography>
          <Button onClick={() => this.props.deleteTodo(this.props.id)}>
            &times;
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default Todo;
