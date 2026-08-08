import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckBox from "../components/input-checkbox";
import Text from "../components/text";
import TrashIcon from "../assets/icons/Trash.svg?react";
import XIcon from "../assets/icons/X-Regular.svg?react";
import CheckIcon from "../assets/icons/Check-Regular.svg?react";
import PencilIcon from "../assets/icons/PencilSimple-Regular.svg?react";
import React from "react";
import InputText from "../components/Input-text";
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";
import useTask from "../hooks/use-task";

interface TaskItemProps {
    task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {

    const [isEditing, setIsEditing] = React.useState(task?.state === TaskState.Creating);

    const [taskTitle, setTaskTitle] = React.useState(task.title || "");

    const {updateTask, updateTaskStatus} = useTask();

    function handleEditTask() {
        setIsEditing(true)
    }
    function handleDoneEditTask() {
        setIsEditing(false)
    }

    function handleChangeTaskTittle(event: React.ChangeEvent<HTMLInputElement>) {
        setTaskTitle(event.target.value || "");
    }

    function handleSaveTask(event: React.SubmitEvent<HTMLFormElement>){
        event.preventDefault();
        updateTask(task.id, {title: taskTitle})
        setIsEditing(false)
    }

    function handleChangeTaskStatus(event: React.ChangeEvent<HTMLInputElement>){
        const checked = event.target.checked;
        updateTaskStatus(task.id, checked);
    }

    return (
        <Card size="md" >
            {!isEditing ? (
                <div className="flex items-center gap-4">
                    <InputCheckBox
                        checked={task?.concluded}
                        onChange={handleChangeTaskStatus} />
                    <Text className={cx("flex-1", {
                        "line-through": task?.concluded,
                    })}>{task?.title}</Text>
                    <div className="flex gap-1">
                        <ButtonIcon icon={TrashIcon} variant="tertiary" />
                        <ButtonIcon icon={PencilIcon} variant="tertiary" onClick={handleEditTask} />
                    </div>
                </div>
            ) : (
                <form onSubmit ={handleSaveTask} className="flex items-center gap-4">
                    <InputText value={taskTitle} className="flex-1" onChange={handleChangeTaskTittle} required autoFocus />
                    <div className="flex gap-1">
                        <ButtonIcon type="button" icon={XIcon} variant="secondary" onClick={handleDoneEditTask}/>
                        <ButtonIcon type="submit" icon={CheckIcon} variant="primary"  />
                    </div>
                </form>
            )}
        </Card>
    )
}