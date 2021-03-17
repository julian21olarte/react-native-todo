import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const TodoList = () => {
  const [list, setList] = useState([
    { title: 'Build my todo app', key: 1 },
    { title: 'Install dependencies in laptop', key: 2 },
    { title: 'Work from home', key: 3 },
    { title: 'Play with sonic (dog)', key: 4 },
  ])

  const handlePress = (key) => {
    setList(prevState => prevState?.filter(item => item?.key !== key))
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
    padding: 15,
  },
  item: {
    margin: 10
  },
  title: {
    padding: 15,
    borderRadius: 5,
    color: 'white',
    backgroundColor: 'tomato',
  },
});
