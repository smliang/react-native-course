import React, {useState} from "react";
import {View, Text, StyleSheet, Button, FlatList} from "react-native";

const AMT_CHANGE = 10;

const Adjuster = ({color, updateColor}) => {

    return (
        <View>
            <Button title={`Increase ${color}`} onPress={() => updateColor({action: "change_color", payload: {colorToChange: color.toLowerCase(), amount: AMT_CHANGE}})}/>
            <Button title={`Decrease ${color}`} onPress={() => updateColor({action: "change_color", payload: {colorToChange: color.toLowerCase(), amount: -1*AMT_CHANGE}})}/>
        </View>
    )
}

const randomRGB = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r},${g},${b})`
}

const style = StyleSheet.create({

})

export default Adjuster;