import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Label = props => {
    return (
        <Text {...props} style={{...styles.label, ...props.style }}>{props.children}</Text>
    );
};

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        padding: 10,
        alignSelf: 'flex-end'
    }
})

export default Label;