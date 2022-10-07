import React, {useState} from "react";
import {View, Text, StyleSheet, Button, FlatList} from "react-native";

const Adjuster = ({color, updateColor}) => {

    return (
        <View>
            <Button title={`Increase ${color}`} onPress={() =>{updateColor(prev => Math.min(prev+10, 255))}}/>
            <Button title={`Decrease ${color}`} onPress={() =>{updateColor(prev => Math.max(0,prev-10))}}/>
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