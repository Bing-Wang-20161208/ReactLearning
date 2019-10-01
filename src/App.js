//rcc  rfc  创建React类组件和函数式组件的快捷键
import React, { Component, Fragment } from 'react'; //Fragment用来代表展示外层空标签,替代div,可以直接携程<></>
import { TodoHeader, TodoInput, TodoList } from './components'; 

class App extends Component {
    render() {
        return (
            <>
                <TodoHeader />
                <TodoInput />
                <TodoList />
            </>
        )
    }
}

export default App;