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

export default function TaskItem() {

    const [isEditing, setIsEditing] = React.useState(false);

    function handleEditTask(){
        setIsEditing(true)
    }
     function handleDoneEditTask(){
        setIsEditing(false)
    }

    return (
        <Card size="md" className="flex items-center gap-4">
            {!isEditing ? (
                <>
                    <InputCheckBox />
                    <Text className="flex-1">Fazer compras da semana</Text>
                    <div className="flex gap-1">
                        <ButtonIcon icon={TrashIcon} variant="tertiary" />
                        <ButtonIcon icon={PencilIcon} variant="tertiary" onClick={handleEditTask}/>
                    </div>
                </>
            ):(
                <>
                    <InputText className="flex-1"/>
                    <div className="flex gap-1">
                        <ButtonIcon icon={XIcon} variant="secondary" />
                        <ButtonIcon icon={CheckIcon} variant="primary" onClick={handleDoneEditTask}/>
                    </div>
                </>
            )}
        </Card>
    )
}