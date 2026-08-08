import useLocalStorage from "use-local-storage-state";
import { TASKS_KEY, TaskState, type Task } from "../models/task";

export default function useTasks() {
    const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, {
        defaultValue: [],
    });

    return {
        tasks,
        tasksCount:tasks.filter((task) => task.state === TaskState.Created).length,
        concludedTasksCount: tasks.filter((task) => task.concluded).length,
    };
}