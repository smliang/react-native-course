import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput} from "react-native";

const reducer = () => {

}

const TextScreen = () => {
    const [name, setName] = useState("")

    return (
    <View>
        <Text style={styles.textStyle}>Enter Your Name: </Text>
        <TextInput 
            style={styles.input} 
            autoCapitalize="none"
            autoCorrect={false} 
            onChangeText={setName}
            value={name}
        />
        {name.length > 2 ? 
            <Text>Your name is: {name}</Text>
            :
            <Text style={styles.error}>Your name must be longer than 2 characters</Text>
        }
    </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,

    },
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        textAlign: "center",
        height: 40
    },
    error: {
        color: "red"
    }
})

export default TextScreen;