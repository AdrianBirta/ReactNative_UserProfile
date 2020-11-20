import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import Colors from '../../../constants/Colors';

import FormGroup from '../../FormGroup';
import Label from '../../Label';
import Input from '../../Input';

const ToDoTask = props => {

    console.log(props.title + '=' + props.status);

    const changeContentHandler = (event) => {
        const obj = {
            text: event,
            id: props.id
        }
        props.changeContent(obj);
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity
                    onPress={() => props.deleteTask(props.id)}
                    style={styles.containerButton}
                >
                    <Text style={styles.closeBtnText}>X</Text>
                </TouchableOpacity>
            </View>
            <View style={{...props.style, ...styles.task}}>
                <View style={styles.maskShape}>
                </View>
                <FormGroup style={styles.formGroup}>
                    <Label style={props.status ? {...styles.labelTitle, ...styles.taskDone} : {...styles.labelTitle} }>
                        {props.title}
                    </Label>
                </FormGroup>
                <FormGroup style={styles.formGroup}>
                    <Label style={props.status ? {...styles.label, ...styles.taskDone} : {...styles.label}}>Edit</Label>
                    <Input 
                        multiline={true}
                        numberOfLines={4}
                        style={styles.input}
                        style={props.status ? {...styles.input, ...styles.taskDone} : {...styles.input} }
                        value={props.content}
                        editable={!props.status}
                        onChangeText={changeContentHandler}
                    />
                </FormGroup>

                <TouchableWithoutFeedback onPress={() => props.changeStatus(props.id) }>
                    <FormGroup style={styles.formGroupStatus}>
                            <Label style={props.status ? {...styles.labelStatus, ...styles.taskDone} : {...styles.labelStatus}}>
                                {!props.status ? 'Active' : 'Done'}
                            </Label>
                            <CheckBox
                                tintColors={{ true: Colors.successColor, false: Colors.primaryColor }}
                                disabled={false}
                                value={props.status}
                                onTouchStart={() => props.changeStatus(props.id)}
                                />
                    </FormGroup>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    maskShape: {
        width:28,
        height:7,
        backgroundColor:'#ffffff',
        position:'absolute',
        right: 0,
        top: -4
    },
    content: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignSelf:'flex-end',
        position:'relative',
        width: 30,
        height: 30,
        backgroundColor: '#ffffff',
        borderWidth:1,
        borderBottomWidth:0,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        borderColor:'lightgray',
    },
    containerButton: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    closeBtnText: {
        color: Colors.primaryColor,
        fontWeight: 'bold'
    },
    taskDone: {
        textDecorationLine:'line-through',
        color: Colors.successColor
    },
    labelStatus: {
        color: Colors.primaryColor,
        alignSelf: 'flex-start',
        fontSize: 18,
        marginHorizontal: 10,
        padding: 0        
    },
    formGroupStatus: {
        alignItems:'center',
        borderBottomWidth: 0,
        borderColor: '#ccc',
        paddingVertical: 10
    },
    input: {
        width:'100%',
        borderColor: 'transparent',
        borderWidth:0,
        color: 'black'
    },
    formGroup: {
        borderBottomWidth:1,
        borderColor: 'lightgray',
        flexDirection: 'column',
        justifyContent:'flex-start',
        alignItems: 'flex-start',
        marginVertical: 10
    },
    labelTitle: {
        color: Colors.primaryColor,
        fontWeight: 'bold',
        alignSelf:'flex-start'
    },
    label: {
        color: Colors.primaryColor,
        alignSelf: 'flex-start',
        fontSize: 12,
        marginHorizontal: 10,
        marginVertical: -5,
        padding: 0
    },
    task: {
        width:'100%',
        minWidth:150,
        marginBottom: 30,
        padding: 10,
        borderWidth: 1,
        borderColor:'lightgray',
        borderRadius: 10,
        borderTopRightRadius:0,
        backgroundColor: '#fff',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 5,
    },
    container: {
        width: '100%',
        paddingHorizontal:12,
        alignItems: 'center'
    }
});

export default ToDoTask;