//react里面通过ref获取组件或dom元素，要使用React.createRef方法来创建一个ref
//prop-types用来做类型检测的第三方库，可npm进入项目，PropType为对象名来引入'prop-types'
import React, { Component, createRef } from 'react'

export default class TodoInput extends Component {
    static defaultProps = { //添加默认的props值
        btnText : "添加ADD"
    }
    constructor () {
        super ();
        this.state = {
            inputValue : "",
            placeholder : "请输入..."
        };
        // 在constructor里面创建ref
        this.inputDom = createRef();
    }
    handleValueChange = (e) => {
        this.setState ({
            inputValue : e.target.value // e.currentTarget.value,但是currentTarget会涉及到冒泡捕获,也可以使用ref
        })
    }
    handleValueKey = (e) => {   //键盘鼠标事件使用e，其他设计元素节点使用e.target,需要冒泡捕获使用e.currentTarget
        if ( e.keyCode === 13) {
            this.handleAddClick();
            // console.log(e, e.target, e.currentTarget);
        }
    }
    handleAddClick = (e) => {
        //实际项目中还需要在这里为inputValue做验证,例如：
        if ( this.state.inputValue.trim() === '' ) {
            return
        }
        this.props.addTodo(this.state.inputValue);
        // console.log(e);
        // console.log(this.inputDom);
        // console.log(e.target);
        // console.log(e.currentTarget);    
        this.setState({
            inputValue : ""
        }, () => {
            this.inputDom.current.focus()
        })
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    value = { this.state.inputValue }
                    placeholder = { this.state.placeholder }
                    onChange = { this.handleValueChange }
                    onKeyUp = { this.handleValueKey }
                    ref = { this.inputDom }
                />
                <button
                    onClick = {this.handleAddClick}
                >{this.props.btnText}</button>
            </div>
        )
    }
}
