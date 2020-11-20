import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../constants/Colors';

const Card = props => {
    return (
        <View 
            {...props} 
            style={
                props.tasks === 0 ? 
                {...props.style, ...styles.cardBorder} : 
                {...props.style, ...styles.cardNoBorder}
            }
        >
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    cardBorder: {
        borderWidth: 1,
        borderColor: Colors.primaryColor,
        alignItems:'center',
        margin: 20,
        padding: 10,
        borderRadius:10,
    },
    cardNoBorder: {
        borderWidth: 0,
        borderColor: Colors.primaryColor,
        alignItems:'center',
        margin: 20,
        padding: 10,
        borderRadius:10,
    }
})

export default Card;