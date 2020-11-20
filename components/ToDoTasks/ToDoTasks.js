import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ToDoTask from './ToDoTask/ToDoTask';
import AddTask from './AddTask/AddTask';
import Card from '../Card';
import ButtonMain from '../ButtonMain';

const ToDoTasks = props => {
    const [tasksState, setTasksState] = useState({
        tasks: []
    });

    const [isAddMode, setIsAddMode] = useState(false)

    const changeStatusHandler = (taskId) => {
        console.log(taskId);
        let tasks = [...tasksState.tasks];
        tasks = tasks.map(task => {
            if (task.id === taskId) {
                task.status = !task.status;
                console.log(task);
            }
            return task;
        })
        setTasksState({tasks:tasks});
    }

    const changeContentHandler = (event) => {
        console.log(event.id,' : ', event.text);
        let tasks = [...tasksState.tasks];
        tasks = tasks.map(task => {
            if (task.id === event.id) {
                task.content = event.text
            }
            return task;
        })

        setTasksState({tasks: tasks});
    }

    const deleteTaskHandler = (taskId) => {
        const tasks = tasksState.tasks.filter(task => task.id !== taskId);
        setTasksState({tasks:tasks});

        save();
    }

    const addNewTaskHandler = (dataTask) => {
        let tasks = [...tasksState.tasks];
        tasks.unshift(dataTask);

        setTasksState({tasks:tasks})
        setIsAddMode(false);
    }

    const renderToDoListGridItem = (itemData) => {
        return (
            <ToDoTask 
                style={styles.toDoTask}
                title={itemData.item.title}
                content={itemData.item.content}
                status={itemData.item.status}
                id={itemData.item.id}
                changeStatus={(taskId) => changeStatusHandler(taskId)}
                changeContent={(event) => changeContentHandler((event))}
                deleteTask={(taskId) => deleteTaskHandler(taskId)}
            />
        )
    }

    useEffect(() => {
        load()
    }, []),
    useEffect(() => {
        save();
    },[tasksState]);
    
    const load = async() => {
        try { 
            await AsyncStorage.getItem('tasks').then(tasks => 
                {
                    tasks ? setTasksState({tasks:JSON.parse(tasks)}) :
                    setTasksState({tasks:[]});
                })
        }
        catch(err) {}
    }

    const save = async() => {
        try {await AsyncStorage.setItem('tasks', JSON.stringify(tasksState.tasks))} 
        catch(err) {}
    }
    
    let tasksView = (
        <View style={styles.todoTaskListContainer}>
            <FlatList 
                keyExtractor={(item, index) => item.id}
                ListHeaderComponent={
                    <>
                        <View>
                            <Card tasks={tasksState.tasks.length}>
                                {
                                    tasksState.tasks.length === 0 ? 
                                        <View style={styles.cardContent}>
                                            <Text>An hour of planning can save you 10 hours of doing.</Text>
                                            <Text>Add your First Task!</Text>
                                            <ButtonMain 
                                                onPress={() => setIsAddMode(true)}
                                                style={{marginVertical: 10}}>
                                                Add new Task
                                            </ButtonMain>
                                        </View>
                                    :
                                        <ButtonMain style={styles.cardContent} onPress={() => setIsAddMode(true)}>
                                            Add new Task
                                        </ButtonMain>
                                }
                            </Card>
                        
                            <AddTask 
                                dataTask={(dataTask) => addNewTaskHandler(dataTask)}
                                cancelDataAdd={() => setIsAddMode(false)}
                                visible={isAddMode}
                            />
                        </View>                
                    </>
                }
                data={tasksState.tasks}
                renderItem={renderToDoListGridItem}
                numColumns={1}
            />
        </View>
    )

    return (
        <View style={styles.container}>
            {tasksView}
        </View>
    );
}

const styles = StyleSheet.create({
    cardContent: {
        alignItems:'center'
    },
    card: {
        borderWidth: 0
    },
    todoTaskListContainer: {
        width:'100%',
        backgroundColor:'#ffffff'
    },
    
    container: {
        backgroundColor: '#fff',
        height: '100%'
    }
});

export default ToDoTasks;