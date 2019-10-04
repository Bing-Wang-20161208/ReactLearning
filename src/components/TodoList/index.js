import React, { Component } from 'react';
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.todos.map (todos => (
                    <TodoItem 
                        key = {todos.id}
                        /* id = {todos.id}
                        title = {todos.title}
                        isCompleted = {todos.isCompleted} 用扩展运算符来代替更加灵活*/
                        {...todos}
                        onCompletedChange = { this.props.onCompletedChange }
                    ></TodoItem>
                ))}
            </ul>
        )
    }
}
