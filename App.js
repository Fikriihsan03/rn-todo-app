// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { FlatList, StyleSheet, View, Button } from "react-native";
import InputTask from "./components/InputTask";
import TaskItem from "./components/TaskItem";

export default function App() {
  const [enteredTask, setEnteredTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [modalStatus, setModalStatus] = useState(false);

  const deleteTaskHandler = (taskId) => {
    return setTaskList((selectedTask) => {
      return selectedTask.filter((task) => task.id !== taskId);
    });
  };
  return (
    <View style={styles.screen}>
      <Button title="Add New Task" onPress={() => setModalStatus(true)} />
      <InputTask
        modalStatus={modalStatus}
        enteredTask={enteredTask}
        setEnteredTask={setEnteredTask}
        setTaskList={setTaskList}
        setModalStatus={setModalStatus}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={taskList}
        renderItem={(taskData) => (
          <TaskItem
            id={taskData.item.id}
            onDelete={deleteTaskHandler}
            task={taskData.item.value}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
