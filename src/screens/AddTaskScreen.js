import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Form, Item, Input, Button, Text as NBText } from 'native-base';

export class AddTaskScreen extends Component {
    static navigationOptions = {
        title: 'Add an entry:',
      };
    state = {
        task: ''
    }

    onChangeText = event => {
        this.setState({ task: event.nativeEvent.text })
    }

    onAddTask = () => {
        this.props.navigation.state.params.saveItem(this.state.task)
        this.props.navigation.goBack()
    }


    render() {
        return (
            <View>
                <View style={{ marginRight: 10,  marginTop: 60}}>
                    <Form>
                        <Item>
                            <Input
                                fontFamily = "Baskerville"
                                value={this.state.task}
                                placeholder='What do I need to do?'        
                                justifyContent = "center"                        
                                autoFocus
                                clearButtonMode='always'
                                autoCorrect={false}
                                onChange={this.onChangeText}
                                onSubmitEditing={this.onAddTask}
                                returnKeyType={'done'}
                            />
                        </Item>
                    </Form>
                </View>
                <View style={{ marginTop: 40, justifyContent: "center", alignItems: "center",  flexDirection: "row"}}>
                    <Button
                        style={{ backgroundColor: '#2f95dc',  margin: 20}}
                        onPress={this.onAddTask}
                    >
                        <NBText style={{ fontWeight: 'bold', fontFamily: "Baskerville" }}>Add Task</NBText>
                    </Button>
                </View>
            </View>
        )
    }
}

export default AddTaskScreen