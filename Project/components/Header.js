import { Text, View, StyleSheet } from "react-native";

export default function Header({ }) {
    return (
        <View>
            <Text style={styles.Header}>
                Simple ToDo App
            </Text>
            <Text style={styles.HeaderSecond}>
                Додайте todo через поле вводу 
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Header: {
        fontSize: 20,
    },
    HeaderSecond:{
        fontSize: 14,
    }
})