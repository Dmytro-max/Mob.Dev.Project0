import { View, StyleSheet, FlatList, Alert } from "react-native";
import ToDoItem from "./TodoItem"


export default function ToDoList(props) {
    () => Alert.alert(props.todos.length.toString())
    return (
        <FlatList
            data={props.todos}
            renderItem={({ todo }) => {
                let obj = todo;
                for (key in obj) {
                    console.log(key + ':' + obj[key])
                }
                // Alert.alert(todo.toString());
                // <ToDoItem key={todo.id}
                //     todo={todo}
                //     handleChangeProps={props.handleChangeProps}
                //     deleteTodosProps={props.deleteTodosProps}
                // />
            }}
        ></FlatList>
    )
}

const styles = StyleSheet.create({
    ToDoList: {
        margin: 10,
    },
})