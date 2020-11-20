import React, { useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Modal } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import FormGroup from '../../FormGroup';
import Label from '../../Label';
import Input from '../../Input'
import Colors from '../../../constants/Colors';
import ButtonMain from '../../ButtonMain';

const AddTask = props => {
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const [status,setStatus] = useState(false);

    const generateTaskId = () => {
        let idTask = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        
        for (let i = 0; i < 4; i++) {
            idTask += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        return idTask;
    }

    const setDataTask = () => {
        const dataTask = {
            id:generateTaskId(),
            title:title,
            content:content,
            status:status
        }

        props.dataTask(dataTask);
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.addTaskContainer}>
                <View style={{...props.style, ...styles.addTask}}>
                    <FormGroup style={styles.formGroup}>
                        <Label style={styles.label}>Add title:</Label>
                        <Input 
                            style={styles.input}
                            placeholder={'Type title here ...'}
                            onChangeText={setTitle}
                        />
                    </FormGroup>
                    <FormGroup style={styles.formGroup}>
                        <Label style={styles.label}>Add Content:</Label>
                        <Input 
                            multiline={true}
                            numberOfLines={4}
                            style={styles.input}
                            placeholder={'Type Content here ...'}
                            onChangeText={setContent}
                        />
                    </FormGroup>
                    <TouchableWithoutFeedback onPress={() => setStatus(!status)}>
                        <FormGroup style={styles.formGroupStatus}>
                                <Label style={styles.labelStatus}>
                                    Status
                                </Label>
                                <CheckBox
                                    tintColors={{ true: 'black', false: Colors.primaryColor }}
                                    disabled={false}
                                    value={status}
                                    onTouchStart={() => setStatus(!status)}
                                    />
                        </FormGroup>
                    </TouchableWithoutFeedback>
                    <FormGroup >
                        <ButtonMain 
                            style={styles.buttonModalTask} 
                            buttonBox={styles.buttonBox, styles.buttonBoxSubmit}
                            onPress={() => setDataTask()}>
                            Submit
                        </ButtonMain>
                        <ButtonMain 
                            style={styles.buttonModalTask} 
                            buttonBox={styles.buttonBox, styles.buttonBoxCancel}
                            onPress={() => props.cancelDataAdd()}
                            >
                            Cancel
                        </ButtonMain>
                    </FormGroup>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    buttonBoxSubmit: {
        backgroundColor: Colors.successColor
    },
    buttonBoxCancel: {
        backgroundColor: Colors.dangerColor
    },
    buttonModalTask: {
        width: '45%',
        paddingTop: 20,
    },
    addTaskContainer: {
        alignItems: 'center',
        marginVertical: 30,
    },
    buttonBox: {
        borderRadius: 7,
        paddingVertical: 5,
        paddingHorizontal: 0,
    },
    addTask: {
        minHeight: 280,
        padding: 20,
        width: '90%',
        borderWidth: 1,
        borderColor: Colors.primaryColor,
        borderRadius: 10
    },
    labelStatus: {
        color: Colors.primaryColor,
        alignSelf: 'flex-start',
        fontSize: 20,
        marginHorizontal: 10,
        padding: 0        
    },
    label: {
        color: Colors.primaryColor,
        alignSelf: 'flex-start',
        fontSize: 12,
        marginHorizontal: 10,
        marginVertical: -5,
        padding: 0
    },
    input: {
        width:'100%',
        borderColor: '#ccc',
        borderWidth: 0
    },
    formGroupStatus: {
        alignItems:'center',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 10
    },
    formGroup: {
        flexDirection: 'column',
        justifyContent:'flex-start',
        alignItems: 'flex-start',
        marginVertical: 10
    }
});

export default AddTask;