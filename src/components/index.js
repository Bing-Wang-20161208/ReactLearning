//负责导出所有的组件

import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export { TodoHeader, TodoInput, TodoList };
// export { default as TodoHeader } from '/TodoHeader';     //不需要外界进行更改组件内容时，采用这种导出方式 