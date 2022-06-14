import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
import React, { useState } from "react";

const InputTask = ({
  enteredTask,
  setEnteredTask,
  setTaskList,
  modalStatus,
  setModalStatus,
}) => {
  const getInputHandler = (task) => {
    setEnteredTask(task);
  };
  const addTaskHandler = () => {
    setTaskList((currentTask) => [
      ...currentTask,
      { id: Math.random().toString(), value: enteredTask },
    ]);
    setEnteredTask("");
    setModalStatus(false);
    // console.log(taskList);
  };
  return (
    <Modal visible={modalStatus} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Isi sendiri"
          style={styles.inputForm}
          value={enteredTask}
          onChangeText={getInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add" onPress={addTaskHandler} />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color="red"
              onPress={() => {
                return setModalStatus(false), setEnteredTask("");
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputForm: {
    width: "80%",
    borderColor: "black",
    borderWidth: 2,
    padding: 10,
    margin: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});

export default InputTask;
