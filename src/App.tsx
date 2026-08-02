import Text from "./components/text";
import TrashIcon from "./assets/icons/Trash.svg?react";
import SpinIcon from "./assets/icons/spinner.svg?react";
import PlusIcon from "./assets/icons/Plus-Regular.svg?react";
import Icon from "./components/icon";
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";
import InputText from "./components/Input-text";
import InputCheckBox from "./components/input-checkbox";
import Card from "./components/card";
import Container from "./components/container";
export default function App() {

  return (
    <Container>
      <div className="grid gap-3">
        <div className="flex flex-col gap-1">
          <Text variant={"body-md"}>ola mundo</Text>
        </div>
        <div className="flex gap-1">
          <Icon svg={TrashIcon} className="fill-green-base" />
          <Icon svg={SpinIcon} animate />
        </div>
        <div>
          <Badge variant={"secondary"}>5</Badge>
          <Badge variant={"primary"}>2 de 5</Badge>
        </div>
        <div>
          <Button icon={PlusIcon}>Nova task</Button>
        </div>
        <div className="flex gap-1">
          <ButtonIcon icon={TrashIcon} />
          <ButtonIcon icon={TrashIcon} variant={"secondary"} />
          <ButtonIcon icon={TrashIcon} variant={"tertiary"} />
        </div>
        <div>
          <InputText />
        </div>
        <div>
          <InputCheckBox />
        </div>
        <div>
          <Card size="md">teste</Card>
        </div>
      </div>
    </Container>
  )

}
