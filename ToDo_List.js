import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const ToDo_List = () => {
    //constants for adding, editing, and deleting tasks
    const [task, setTask] = useState(""); 
    const [tasks, setTasks] = useState([]); 
    const [editIndex, setEditIndex] = useState(-1); 
  
    //add task function
    const handleAddTask = () => { 
        if (task) { 
            if (editIndex !== -1) { 
                const updatedTasks = [...tasks]; 
                updatedTasks[editIndex] = task; 
                setTasks(updatedTasks); 
                setEditIndex(-1); 
            } else { 
                setTasks([...tasks, task]); 
            } 
            setTask(""); 
        } 
    }; 
  
    //editing a task
    const handleEditTask = (index) => { 
        const taskToEdit = tasks[index]; 
        setTask(taskToEdit); 
        setEditIndex(index); 
    }; 
  
    //deleting a task
    const handleDeleteTask = (index) => { 
        const updatedTasks = [...tasks]; 
        updatedTasks.splice(index, 1); 
        setTasks(updatedTasks); 
    }; 
  
    //render and show list of tasks
    //touchable opacity makes the buttons fade-like animation
    //on press to specify which function to be run
    const renderItem = ({ item, index }) => ( 
        <View style={styles.task}> 
            <Text 
                style={styles.itemList}>{item}</Text> 
            <View 
                style={styles.taskButtons}> 
                <TouchableOpacity 
                    onPress={() => handleEditTask(index)}> 
                    <Text 
                        style={styles.editButton}>Edit</Text> 
                </TouchableOpacity> 
                <TouchableOpacity 
                    onPress={() => handleDeleteTask(index)}> 
                    <Text 
                        style={styles.deleteButton}>Delete</Text> 
                </TouchableOpacity> 
            </View> 
        </View> 
    ); 

  return (
    <View style={styles.container}>
      <View style={styles.whitebox}></View>
      <Text style={styles.text}>-*- My ToDo List -*-</Text>
      <View style={styles.whitebox}></View>

      <TextInput 
      style={styles.input} 
      placeholder=' what should i do today?'
      value={task}
      onChangeText={(text) => setTask(text)}
      />

      <View style={{height: '100%', paddingTop: '2.5%', paddingBottom: '2.5%',}}>
        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <Text style={styles.textBttn}>
                {editIndex !== -1 ? "Update Task!" : "Add Task!"}
            </Text>
        </TouchableOpacity>
        
        <View style={styles.whitebox}></View>
        <View style={styles.bluebox}>
            <FlatList
                data={tasks}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
     
      </View>   
    </View>
  );
};

export default ToDo_List

const styles = StyleSheet.create({
    //application design
    container: {
        marginHorizontal: 16,
        padding: 20,
        marginTop: 20,
    },
    whitebox: {
        width: 10,
        height: 15,
        backgroundColor: '#ffff',
    },
    bluebox: {
        paddingTop: '5%',
        height: '60%', 
        backgroundColor: '#004aad',
        borderRadius: 6,
    },
    input: {
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 4, 
        borderColor: '#004aad', 
        borderRadius: 6,
        fontFamily: 'monospace', 
    },
    text: {
        alignItems: 'center',
        color: '#004aad',
        fontFamily: 'monospace',
        fontSize: 22,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#454655',
        borderRadius: 6,
        paddingVertical: 12,
        alignItems: 'center',
    },
    textBttn: {
        alignItems: 'center',
        color: '#ffff',
        fontFamily: 'monospace',
        fontSize: 15,
        fontWeight: 'bold',
    },

    //add, edit, and delete tasks
    task: {
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center", 
        marginBottom: 15, 
        fontSize: 18, 
    },
    itemList: {
        paddingLeft: 20,
        color: '#ffff',
        fontFamily: 'monospace',
        fontSize: 18,
    },
    taskButtons: { 
        flexDirection: "row", 
    }, 
    editButton: { 
        marginRight: 15,
        textAlign: 'center', 
        color: "#454655", 
        fontFamily: 'monospace',
        fontWeight: "bold", 
        fontSize: 18, 
        backgroundColor: '#E1DFD7',
        width: 70,
        height: 30,
        borderRadius: 6,
    }, 
    deleteButton: { 
        marginRight: 20, 
        textAlign: 'center', 
        color: "#AD0500", 
        fontFamily: 'monospace',
        fontWeight: "bold", 
        fontSize: 18, 
        backgroundColor: '#E1DFD7',
        width: 90,
        height: 30,
        borderRadius: 6,
    }, 
})