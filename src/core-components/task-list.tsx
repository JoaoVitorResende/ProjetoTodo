import Button from "../components/button";
import PlusIcon from "../assets/icons/Plus-Regular.svg?react";
import TaskItem from "./task-item";
import useTasks from "../hooks/use-task";
export default function TaskList() {
    const {tasks} = useTasks();
    console.log(tasks)
    return(
        <>
            <section>
                <Button icon={PlusIcon} className="w-full">Nova tarefa</Button>
            </section>
            <section className="space-y-2">
                <TaskItem/>
                <TaskItem/>
                <TaskItem/>
            </section>
        </>
    )

}
