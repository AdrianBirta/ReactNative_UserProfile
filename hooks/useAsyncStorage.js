import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

const useAsyncStorage = asyncStorageKey => {
    const [value, setValue] = useState()
    
    useEffect(() => { 
        load();
    }, [])

    useEffect(() => {
        save();
    }, [asyncStorageKey, value]);

    const load = async() => {
        try {
            if (asyncStorageKey === 'date') {
                await AsyncStorage.getItem(asyncStorageKey || '')
                    .then(value => {
                        setValue(new Date(JSON.parse(value)))
                    }).catch(err => {})
            } else {
                await AsyncStorage.getItem(asyncStorageKey || '')
                    .then(value => {
                        setValue(value)
                    }).catch(err => {})
            }
            // await AsyncStorage.removeItem(asyncStorageKey)
        } catch(err) {}
    }
    const save = async() => {
        try {
            if (typeof value !== 'string') {
                await AsyncStorage.setItem(asyncStorageKey, JSON.stringify(value))    
            } else {
                await AsyncStorage.setItem(asyncStorageKey, value)
            }
        } catch(err) {}
    }

    return [value, setValue];
}

export default useAsyncStorage;