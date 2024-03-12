import React, {useState, ChangeEvent, FormEvent, useEffect} from "react";
// useEffect - uma ação uma unica vez 
import styles from "./TaskForm.module.css"

//interfaces
import {ITask} from "../interfaces/Task"
import TaskList from "./TaskList";

interface Props {
    btnText: string
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>> // alterando o state de uma lista, e deixando opicional com "?"
    task?: ITask | null
    handleUpdate?(): null
}

const TaskForm = ({btnText, taskList, setTaskList, task, handleUpdate}:Props) => {

    // falar que é um usestate, um number e começa como 0, quando é string começa vazio
    const [id,setId] = useState<number>(0)
    const [title, setTitle] = useState<string>("")
    const [difficulty, setDifficulty] = useState<number>(0)

    // quando acontecer um update ele vai ser atualizado
    useEffect(() => {
        if (task){
            setId(task.id)
            setTitle(task.title)
            setDifficulty(task.difficulty)
        }
    }, [task])

    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        //enviar sem recarregar a tela
        e.preventDefault();
        if(handleUpdate){
            console.log(handleUpdate)
        }else{
            const id = Math.floor(Math.random()*1000) 
            const newTask: ITask = {id, title, difficulty}
            // '!' é para mostrar para o react que o setTaskList vai vir
            setTaskList!([...taskList, newTask])
            setTitle("");
            setDifficulty(0);
        }
    };

    // e - é o evento
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === "title"){
            setTitle(e.target.value)
        } else {
            setDifficulty(parseInt(e.target.value))
        }
    };

 
    return (
        <form onSubmit={addTaskHandler} className={styles.form}>
            <div className={styles.input_container}>
                <label htmlFor="title">Título</label>
                <input type="text" name="title" placeholder="Título da tarefa" onChange={handleChange} value={title}/>
            </div>
            <div className={styles.input_container}>
                <label htmlFor="difficulty">Dificultade: </label>
                <input type="text" name="difficulty" placeholder="Dificuldade da tarefa" onChange={handleChange} value={difficulty} />
            </div>
            <input type="submit" value={btnText} />
        </form>
    )
}

export default TaskForm