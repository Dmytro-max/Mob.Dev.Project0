import { View, StyleSheet, Alert } from "react-native";
import Header from './Header';
import InputTodo from "./InputTodo";
import ToDoList from "./TodosList";
import { useState } from "react";

export default function TodoContainer( ) {
    const [todos, setToDos] = useState([]);

    handleChange = () => {
        Alert.alert('It`s working!');
        // setToDos({
        //     todos.map(todo => {
        //         if (todo.id === id) {
        //             return todo;
        //         }
        //     })
        // })
    }

    delToDo = id => {
        const updated = todos.filter(todo => {
            return todo.id !== id
        })
        setToDos(updated);
    }

    AddToDoItem = title => {
        const newToDo = {
            id: todos.length + 1,
            title: title,
            completed: false
        }
        // Alert.alert(newToDo.id.toString());
        setToDos([...todos, newToDo]);
        // Alert.alert(todos.pop().toString());
        // let obj = todos.pop();
        // for (key in obj){
        //     console.log(key+obj[key])
        // }
    }

    return (
        <View style={styles.TodoContainer}>
            <Header></Header>
            <InputTodo
                addToDoProps={AddToDoItem}
            >
            </InputTodo>
            <ToDoList todos={todos}
                handleChangeProps={handleChange}
                deleteTodosProps={delToDo}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    TodoContainer: {
        pading: 10,
    }
})