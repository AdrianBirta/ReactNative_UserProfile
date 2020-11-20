import React from 'react';
import { Keyboard, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import ToDoTasks from '../components/ToDoTasks/ToDoTasks';

const ToDoList = (props) => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={{backgroundColor:'#ffffff'}}>
                <ToDoTasks />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ToDoList;