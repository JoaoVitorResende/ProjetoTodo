import useLocalStorage from "use-local-storage-state";
import { TASKS_KEY, TaskState, type Task } from "../models/task";

export default function useTask() {
    const [task, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, {
        defaultValue: [],
    });

    function prepareTask(){
        setTasks([...task, {
            id: Math.random().toString(36).substring(2, 9),
            title: "",
            state: TaskState.Creating
        }])
    }

    function updateTask(id: string, payLoad:{title: Task["title"]}){
        setTasks(task.map((task) => task.id === id ? {
                ...task,
                state: TaskState.Created,
                ...payLoad
            }:task)
        )
    }

    return{
        prepareTask,
        updateTask
    } 
}