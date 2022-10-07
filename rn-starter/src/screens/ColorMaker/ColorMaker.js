import React, {useState} from "react";
import {View, Text, StyleSheet, Button, FlatList} from "react-native";
import Adjuster from "./Adjuster";

const ColorScreen = () => {
    const [red, setRed] = useState(randomRGB())
    const [blue, setBlue] = useState(randomRGB())
    const [green, setGreen] = useState(randomRGB())
    console.log(red,green,blue)

    return (
        <View style={style.container}>
            <Text>Color Maker</Text> 
            <Adjuster color="Red" updateColor={setRed}/>
            <Adjuster color="Green" updateColor={setGreen}/>
            <Adjuster color="Blue" updateColor={setBlue}/>
            <View style={{width:150, height:150, backgroundColor:`rgb(${red},${green},${blue})`}} />
        </View>
    )
}

const randomRGB = () => {
    return Math.floor(Math.random() * 256)
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center'
    }
})

export default ColorScreen;