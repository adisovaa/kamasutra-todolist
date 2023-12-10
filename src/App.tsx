import React, {useState} from 'react';
import './App.css';
import Todolist, {TaskType} from "./components/Todolist";
import {v1} from "uuid";

export type FilterValuesType = 'all' | 'completed' | 'active'

function App() {
    const [tasks, setTask] = useState<Array<TaskType>>([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'React', isDone: false},
        {id: v1(), title: 'TypeScript', isDone: false},
        {id: v1(), title: 'JavaScript', isDone: true}
    ])
    console.log(tasks)
    const [filter, setFilter] = useState<FilterValuesType>('all')
    const removeTask = (id: string) => {
        let filteredTask = tasks.filter(t => t.id !== id)
        setTask(filteredTask)
    }

    const addTask = (title: string) => {
        let newTask = {id: v1(), title: title, isDone: false}
        let setTasks = [newTask, ...tasks]
        setTask(setTasks)
    }

    const changeFilter = (value: FilterValuesType) => {
        setFilter(value)
    }

    let tasksForTodolist = tasks
    if (filter === 'completed') {
        tasksForTodolist = tasks.filter(t => t.isDone)
    }
    if (filter === 'active') {
        tasksForTodolist = tasks.filter(t => !t.isDone)
    }

    return (
        <div className="App">
            <Todolist title={'New York'}
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
            />
        </div>
    );
}

export default App;