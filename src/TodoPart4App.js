import React from "react";
import TodoPart3 from "./TodoPart3";
import todosData from "./todosData";

class TodoPart4App extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: todosData,
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(id) {
		this.setState((prevState) => {
			const updatedTodo = prevState.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			});

			return {
				todos: updatedTodo,
			};
		});
	}
	render() {
		const todoComponents = this.state.todos.map((item) => (
			<TodoPart3 key={item.id} item={item} handleChange={this.handleChange} />
		));
		return <div>{todoComponents}</div>;
	}
}

export default TodoPart4App;
