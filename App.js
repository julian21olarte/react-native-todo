import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <TodoList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: 'tomato',
    fontSize: 18,
    padding: 15
  },
  buttonContainer: {
    borderRadius: 3,
    backgroundColor: 'tomato',
    color: 'white',
  }
});
