import React, { Component } from 'react'

export default class TodoItem extends Component {
// constructor () {}    //构造函数只会执行一次，所以这个函数里面只需要初始化，任何变化都不能在这里体现
    handleCheckedChange = () => {
        // this.props.onCompletedChange && this.props.onCompletedChange(this.props.id);
        const { //解构赋值
            onCompletedChange = () => {},   //初始化为空函数，免去判断
            id
        } = this.props;
        onCompletedChange(id);
    }
    shouldComponentUpdate (nextProps, nextState) {  //将Component换成PureComponent可以直接处理这个性能问题，但是也是浅比较
        // console.log(nextProps, nextState);  //nextProps表示更新之后的数据，this.props表示现在的未更新的数据
        // console.log(this.props, this.state);        
        // return true;
        return nextProps.isCompleted !== this.props.isCompleted;
    }
    render() {
        // console.log(`TodoItem ${this.props.title} render`);  //测试渲染性能,利用shouldComponentUpdate()，控制变化的单个组件渲染，避免所有组件一起渲染，降低组件性能
        return (
            <li>
                <input
                    checked = { this.props.isCompleted }
                    type= "checkbox"
                    onChange = { this.handleCheckedChange }
                />
                <span>{this.props.title} {this.props.isCompleted ? "已完成" : "未完成"}</span>
                
            </li>
        )
    }
}
