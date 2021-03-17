import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const TodoList = () => {
  const [text, setText] = useState('')
  const [list, setList] = useState([
    { title: 'Build my todo app', key: 1 },
    { title: 'Install dependencies in laptop', key: 2 },
    { title: 'Work from home', key: 3 },
    { title: 'Play with sonic (dog)', key: 4 },
  ])

  const handlePress = (key) => {
    setList(prevState => prevState?.filter(item => item?.key !== key))
  }

  const handleAddTaskEnter = (e) => {
    if(e.keyCode === 13) {
      handleAddTask()
    }
  }
  const handleAddTask = () => {
    if(text?.trim() !== '') {
      setList([
        { title: text, key: list?.length + 1 },
        ...list,
      ])
      setText('')
    }
  }

  const changeText = (newText) => {
    setText(newText)
  }

  const renderItems = ({ item }) => {
    return (
      <TouchableOpacity>
        <View style={styles.item}>
          <Text style={styles.title}>{item?.title}</Text>
          <MaterialIcons
            color="tomato"
            style={styles.deleteIcon}
            name="delete-outline" size={24}
            onPress={() => handlePress(item?.key)}
          />
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.list}>
      <View style={styles.addTaskContainer}>
        <TextInput
          value={text}
          style={styles.addTaskInput}
          placeholder='Add a new task'
          onKeyPress={handleAddTaskEnter}
          onChangeText={changeText}
        />
        <Button title='Add task' color='tomato' onPress={handleAddTask} />
      </View>
      <FlatList
        data={list}
        renderItem={renderItems}
        keyExtractor={(item, i) => `${item?.tite}-${item?.key}-${i}`}
      />
    </View>
  );
}
export default TodoList;

const styles = StyleSheet.create({
  list: {
    padding: 25,
  },
  item: {
    display: 'flex',
    borderRadius: 5,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'tomato',
    borderStyle: 'dashed',
    justifyContent: 'space-between'
  },
  title: {
    padding: 15,
    color: 'tomato',
  },
  addTaskInput: {
    padding: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: 'tomato',
    borderStyle: 'dashed',
  },
  addTaskContainer: {
    marginBottom: 20,
  },
  deleteIcon: {
    padding: 10
  }
});
