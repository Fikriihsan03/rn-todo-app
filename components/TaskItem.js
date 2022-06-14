import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const TaskItem = ({ task, onDelete, id }) => {
  return (
    // <View>
    <TouchableOpacity onPress={onDelete.bind(this, id)}>
      <View style={styles.listItem}>
        <Text>{task}</Text>
      </View>
    </TouchableOpacity>
    // </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    color: "white",
    marginVertical: 5,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TaskItem;
