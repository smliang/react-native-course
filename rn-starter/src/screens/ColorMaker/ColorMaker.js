import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import Adjuster from "./Adjuster";

const reducer = (state, action) => {
    const {colorToChange, amount} = action.payload;
    let res = {...state}
    res[colorToChange] += amount
    res[colorToChange] = Math.max(0, res[colorToChange])
    res[colorToChange] = Math.min(255, res[colorToChange])
    return res;
}

const ColorScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: randomRGB(), green: randomRGB(), blue: randomRGB() })
    console.log(state)

    return (
        <View style={style.container}>
            <Text>Color Maker</Text>
            <Adjuster color="Red" updateColor={dispatch} />
            <Adjuster color="Green" updateColor={dispatch} />
            <Adjuster color="Blue" updateColor={dispatch} />
            <View style={{ width: 150, height: 150, backgroundColor: `rgb(${state.red},${state.green},${state.blue})` }} />
        </View>
    )
}

const randomRGB = () => {
    return Math.floor(Math.random() * 256)
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
})

export default ColorScreen;