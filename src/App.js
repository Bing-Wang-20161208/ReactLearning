//rcc  rfc  创建React类组件和函数式组件的快捷键
import React, { Component, Fragment } from 'react'; //Fragment用来代表展示外层空标签,替代div,可以直接携程<></>
import { TodoHeader, TodoInput, TodoList, Like } from './components'; 

class App extends Component {
    constructor () {
        super ();
        this.state = {
            dec : "代办事项",
            title : "具体事宜",
            // article : '<div>dhjah</div>',   //要读到div的text内容，render需要用到标签属性dangerouslySetInnerHTML={{__html : this.state.article}}
            todos : [{
                id : 1,
                title : '吃饭',
                isCompleted : true
            },{
                id : 2,
                title : '睡觉',
                isCompleted : false
            }]
        }
    }
    addTodo = (title) => {
        this.setState({
            todos : this.state.todos.concat(
                {
                    id : Math.random(),
                    title : title,
                    isCompleted : false
                }
            )
        })
        
    }
    render() {
        return (
            <>
                <TodoHeader dec = {this.state.dec}>
                    <strong> {this.state.title} </strong>
                </TodoHeader>
                <TodoInput
                    addTodo = {this.addTodo}
                />
                <TodoList todos = {this.state.todos} />
                <Like />
            </>
        )
    }
}

export default App;