import TodoList from "./TodoList.js";

export default function App($app) {
    this.state = {
        data: ['a', 'b']
    }

    const todoList = new TodoList({
        $app, 
        initailState:this.state.data
    })
}