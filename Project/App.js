import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TodoContainer from './components/TodoContainer';


export default function App() {
  return (
    <View style={styles.container}>
      
      {/* <StatusBar style="auto" /> */}
        {/* <View style={styles.ToDoCreateViewBlock}>
          <Text>Add new todo:</Text>
          <View style={styles.ToDoCreateView}>
            <TextInput
              placeholder='Enter your todo...'
            >
            </TextInput>
            <Button style={styles.Button} title='Submit' ></Button>
          </View>
        </View>
      <View style={styles.ToDoList}>

      </View> */}
      <TodoContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    margin: 25,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  ToDoCreateViewBlock: {
    // flex: 1,
    margin: 30,
    padding: 10,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: 'black',
    width: 250,
  },
  ToDoCreateView: {
    flex: 0,
    flexDirection: 'row',
  },
  Button: {
    width: 5,
  },
});
