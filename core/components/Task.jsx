import React, { useContext } from "react";
import { Text, ListItem, Left, Right } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { userContext } from "../context/UserContext";

const Task = ({ task }) => {
  const { updateTask, removeTask } = useContext(userContext);

  return (
    <>
      <ListItem onLongPress={() => removeTask(task.id)}>
        <Left>
          <Text>{task.name}</Text>
        </Left>
        <Right>
          {task.isComplete ? (
            <AntDesign
              name="checkcircle"
              size={25}
              color="green"
              onPress={() => {
                updateTask(task.id, false);
              }}
            />
          ) : (
            <AntDesign
              name="checkcircle"
              size={25}
              color="gray"
              onPress={() => {
                updateTask(task.id, true);
              }}
            />
          )}
        </Right>
      </ListItem>
    </>
  );
};

export default Task;
