import React from 'react';
import { StyleSheet, View } from 'react-native';

const FormGroup = props => {
    return (
        <View {...props} style={{...styles.formGroup, ...props.style }}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    formGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: '100%'
    }
})

export default FormGroup;