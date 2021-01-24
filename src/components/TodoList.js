import React, {useState} from 'react'; 
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
    const [allTodos,setTodos] = useState([]);

    const addTodo = incomingTodo => {
        if (!incomingTodo.text || /^\s*$/.test(incomingTodo.text)) {
            return;
        }

        const newTodos = [incomingTodo, ...allTodos];
    
        setTodos(newTodos);
    };

    const completeTodo = id => {
        let updatedTodos = allTodos.map(todo => {
            if (todo.id === id) {
              todo.isComplete = !todo.isComplete   
            }
            return todo 
        });
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h1>What's the Plan for Today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={allTodos} completeTodo={completeTodo} /> 
        </div>
    );
}

export default TodoList; 