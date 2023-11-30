import { Text, View, Button, StyleSheet,  } from "react-native";
import Checkbox from 'expo-checkbox';

const ToDoItem = (props) => {
    return (
        <View style={styles.ToDoItem}>
            <Checkbox  style={styles.CheckBox} value="" 
            checked={props.todo.checked} 
            onChange={() => props.handleChangeProps(props.todo.id)} 
            />
            <Text >{props.todo.title}</Text>
            <Button 
            title="Delete" 
            onClick={() => props.deleteTodosProps(props.todo.id)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    DeleteButton:{
        fontSize: 8,
        height: 8,
        width: 40,
        backgroundColor: 'orange',
    },
    ToDoItem:{
        flexDirection: "row",
        textAlign: "end",
        alignContent: 'flex-start',
        justifyContent: "space-between",
        alignItems: 'center',
        borderWidth: 1,
        padding: 5,
    },
})

export default ToDoItem;