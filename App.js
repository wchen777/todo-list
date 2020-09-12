import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import AddTaskScreen from './src/screens/AddTaskScreen';


const navigator = createStackNavigator(
  {
    Home: IndexScreen,
    AddTask: AddTaskScreen
  },
  {
    initialRouteName: '',
    defaultNavigationOptions: {
      title: 'Will\'s To-Do List',
      headerStyle: { backgroundColor: '#2f95dc'},
      headerTitleStyle: { color: 'white', fontFamily: "Baskerville", fontSize: 25},
      headerTintColor: 'white'
    },
    mode: 'modal'
    
  }
);

// const App = createAppContainer(navigator);

export default createAppContainer(navigator)
