import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "hello world"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    
})