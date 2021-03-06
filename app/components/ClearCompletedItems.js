import React, {Component} from 'react';
import {filter, each} from 'lodash';

export default class ClearCompletedItems extends Component {

    constructor(props) {
        super(props);
    }

    removeCompletedTodosHandle = event => {
        each(this.props.todos, todo => {
            if (todo.completed) {
                this.props.removeTodo({
                    id: todo.id
                });
            }
        });
    };

    completedCount() {
        return filter(this.props.todos, todo => todo.completed).length;
    }

    render() {
        return (
            this.props.todos.length > 0 && <div className="clear-completed" onClick={this.removeCompletedTodosHandle}>
                Clear <span>{this.completedCount()}</span> completed items
            </div>
        )
    }
}
