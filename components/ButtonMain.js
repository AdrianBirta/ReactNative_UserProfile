import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../constants/Colors';

const ButtonMain = props => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onPress} style={{...props.style}}>
            <View style={{...styles.button, ...props.buttonBox}}>
                <Text style={{...styles.buttonText, ...props.buttonText}}>
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primaryColor,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center'
    }
})

export default ButtonMain;