import React, {useState} from "react";
import {View, Text, StyleSheet, Button, FlatList} from "react-native";

const ColorScreen = () => {
    const [colors, setColors] = useState([]);

    const addColor = () => {
        setColors(prev => [...prev, randomRGB()])
    }

    return (
        <View>
            <Text>Color Screen!</Text> 
            <Button title="Add a Color" onPress={addColor}/>
            <FlatList 
                keyExtractor={(color) => color} 
                data={colors} 
                renderItem={({item: color}) => {
                    return <View style={{width:100, height:100, backgroundColor:color}}/>
                }}
            />
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

export default ColorScreen;