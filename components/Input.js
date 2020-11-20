import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = props => {
    return (
        <TextInput 
            {...props} 
            style={{...styles.input, ...props.style }}
            />
    );
};

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        width: 200,
        fontSize: 16,
        padding: 10
    }
})

export default Input;