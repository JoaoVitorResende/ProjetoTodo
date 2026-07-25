import Text from "./components/text";
import TrashIcon from "./assets/icons/Trash.svg?react";
export default function App() {

  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-1">
        <Text variant={"body-md"}>ola mundo</Text>
      </div>
      <div className="flex gap-1">
        <TrashIcon className="fill-green-base"/>
      </div>
    </div>
  )

}
