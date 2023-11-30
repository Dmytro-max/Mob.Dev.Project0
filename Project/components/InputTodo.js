import { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button, Alert } from "react-native";



export default function InputTodo(props) {

    const [title, setText] = useState();

    return (
        <View style={styles.ToDoCreateView}>
            <TextInput style={styles.TextInput}
                placeholder='Enter your todo...'
                value={title}
                onChangeText={setText}
            >
            </TextInput>
            <Button 
            style={styles.Button} 
            title='Submit' 
            onPress={() => {
                // Alert.alert(((title)));
                props.addToDoProps(title)
                setText("");
            }}
            ></Button>
        </View>)
}

const styles = StyleSheet.create({
    ToDoCreateView: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: "space-between",
        borderWidth: 1,
    },
    TextInput: {
        fontSize: 14,
    },
    Button: {

    }
})