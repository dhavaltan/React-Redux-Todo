import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import "./Todoform.css";
import Button from "@material-ui/core/Button";

export class Todoform extends Component {
  state = {
    name: ""
  };

  nameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  render() {
    return (
      <div className="todoForm">
        <form noValidate autoComplete="off">
          <TextField
            onChange={e => this.nameChange(e)}
            id="standard-basic"
            label="Enter what to do"
          />
          <br />
          <br />
          <Button
            onClick={() => this.props.addToDo(this.state.name)}
            variant="contained"
            color="primary"
          >
            Add Task
          </Button>
        </form>
      </div>
    );
  }
}

export default Todoform;
