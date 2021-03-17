import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';

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
      <TouchableOpacity onPress={() => handlePress(item?.key)}>
        <View style={styles.item}>
          <Text style={styles.title}>{item?.title}</Text>
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
        keyExtractor={item => item?.key?.toString()}
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
    marginVertical: 10
  },
  title: {
    padding: 15,
    borderRadius: 5,
    color: 'tomato',
    border: '1px dashed tomato',
  },
  addTaskInput: {
    padding: 10,
    marginBottom: 5,
    border: '1px solid tomato'
  },
  addTaskContainer: {
    marginBottom: 20,
  }
});
