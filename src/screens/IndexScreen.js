import React, {Component} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, StatusBar, AsyncStorage } from 'react-native';
import { Fab, Icon, Container } from 'native-base';
//import 'react-native-get-random-values';
// import uuidv1 from 'uuid/dist/v1'
import uuid from 'react-native-uuid';
import _values from 'lodash.values'
import Item from '../components/Item';
import { AppLoading } from 'expo'
// import * as Font from 'expo-font'
import { Feather } from '@expo/vector-icons';

export class IndexScreen extends Component {
  state = {
    isDataReady: false,
    todos: {},
    //mockItems: ['First Itemsasdgasdgasdgasdfasdfadsfasd', 'Second Item', 'Third Item']
   }
  componentDidMount = () => {
      this.loadTodos()
  }

  loadTodos = async () => {
      // reads anything saved on device database
      const getTodos = await AsyncStorage.getItem('todos')
      // parse the JSON
      const parsedTodos = JSON.parse(getTodos)
      // default value is empty object
      this.setState({ isDataReady: true, todos: parsedTodos || {} })
  }

  // save method stores items in the asyncstorage
  saveTodos = newToDos => {
    const saveTodos = AsyncStorage.setItem('todos', JSON.stringify(newToDos))
    }

  addTodo = newTask => {
    console.log(newTask);
      const newTodoItem = newTask
     if (newTodoItem !== '') {
        this.setState(prevState => {
          const ID = uuid()
          const newToDoObject = {
            [ID]: {
              id: ID,
              text: newTodoItem,
              createdAt: Date.now()
                  }
              }
          const newState = {
            ...prevState,
           todos: {
          ...prevState.todos,
           ...newToDoObject
            }
              }
          this.saveTodos(newState.todos)
          return { ...newState }
          })
            }
          }

deleteTodo = id => {
  this.setState(prevState => {
      const todos = prevState.todos
      delete todos[id]
      const newState = {
              ...prevState,
              ...todos
            }
          this.saveTodos(newState.todos)
        return { ...newState }
          })
        }

  onPressFab = () => {
      this.props.navigation.navigate('AddTask', {
          saveItem: this.addTodo
      })
    }
    
  render() {
      const { isDataReady } = this.state
      if (!isDataReady) {
          return <AppLoading />
      }
      return (
        <Container>
       <View style = {styles.container}>
         <FlatList
                    data={_values(this.state.todos)}
                    contentContainerStyle={styles.content}
                    renderItem={row => {
                        return <Item
                        textValue={row.item.text}
                        id={row.item.id}
                        deleteTodo={this.deleteTodo}
                    />
                    }}
                    keyExtractor={item => item.id}
                />
          <Fab
         direction="up"
         active={true}
         containerStyle={{}}
         style={{ backgroundColor: '#2f95dc', zIndex: 999 }}
         position="bottomRight"
         onPress={() => this.onPressFab()}>
         <Icon name= "add"/>
       </Fab>
         </View>
       </Container>
      )
  }
  
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      paddingVertical: 8,
    },
  
    row: {
      flex: 1,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8,
      paddingHorizontal: 16,
    }
  });
export default IndexScreen;


