import React, { useState } from 'react';
import { Keyboard, Platform, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import FormGroup from '../components/FormGroup';
import Label from '../components/Label';
import Input from '../components/Input';
import ButtonMain from '../components/ButtonMain';
import useAsyncStorage from '../hooks/useAsyncStorage';

const InfoUser = (props) => {

    const [date, setDate] = useAsyncStorage('date')
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const [firstName, setFirstName] = useAsyncStorage('firstName')
    const [lastName, setLastName] = useAsyncStorage('lastName')

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    const showDatepicker = () => {
        showMode('date');
    };
    
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <FormGroup style={styles.formGroup}>
                    <Label>First Name:</Label>
                    <Input 
                        style={styles.input}
                        blurOnSubmit
                        autoCapitalize='none'
                        placeholder='Type here'
                        value={firstName ? firstName : ''}
                        onChangeText={setFirstName}
                        />
                </FormGroup>
                <FormGroup style={styles.formGroup}>
                    <Label>Last Name:</Label>
                    <Input 
                        style={styles.input}
                        blurOnSubmit
                        autoCapitalize='none'
                        placeholder='Type here'
                        value={lastName ? lastName : ''}
                        onChangeText={setLastName}
                        />
                </FormGroup>
                <FormGroup style={styles.formGroup}>
                    <ButtonMain 
                        onPress={showDatepicker}
                        style={styles.buttonContainerDatePicker}
                        buttonBox={styles.buttonBoxDatePicker}
                        buttonText={styles.buttonTextDatePicker}
                    >
                        Birth Date:
                    </ButtonMain>
                    <TouchableWithoutFeedback onPress={showDatepicker}>
                        <View style={styles.datePickerView}>
                            <Text>
                                {date ? date.toLocaleDateString() : 
                                new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()).toLocaleDateString()}
                                {show && (
                                    <DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    mode={mode}
                                    is24Hour={true}
                                    display="spinner"
                                    onChange={onChange}
                                    />
                                    )
                                }
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </FormGroup>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    datePickerView: {
        borderBottomWidth: 1,
        padding: 10,
        flex: 1.4
    },
    buttonTextDatePicker: {
        color:'#000000',
        fontSize: 16
    },
    buttonBoxDatePicker: {
        backgroundColor: 'transparent',
        color:'red',
        paddingVertical:0,
        paddingHorizontal:10,
    },
    buttonContainerDatePicker: {
        flex: 1
    },
    formGroup: {
        width: '80%',
        marginVertical: 10
    },
    screen: {
        flex: 1,
        alignItems: 'center'
    }
})

export default InfoUser;