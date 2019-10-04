import React, { Component } from 'react'

export default class TodoItem extends Component {
    onCheckedChange = () => {
        // this.props.onCompletedChange && this.props.onCompletedChange(this.props.id);
        const { //解构赋值
            onCompletedChange = () => {},   //初始化为空函数，免去判断
            id
        } = this.props;
        onCompletedChange(id);
    }
    render() {
        return (
            <li>
                <input
                    checked = { this.props.isCompleted }
                    type= "checkbox"
                    onChange = { this.onCheckedChange }
                />
                <span>{this.props.title} {this.props.isCompleted ? "已完成" : "未完成"}</span>
                
            </li>
        )
    }
}
