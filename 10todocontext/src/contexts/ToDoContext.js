import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos: [       //this is a property or a variable at the end of the day
        {
            id: 1,
            todo: "To Do msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updatedTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useToDo = () => {
    return useContext(ToDoContext) 
}

// export const useToDo = useContext(ToDoContext)

export const ToDoProvider = ToDoContext.Provider