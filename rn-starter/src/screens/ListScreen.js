import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: "Friend 1", age: 20},
        {name: "Friend 2", age: 45},
        {name: "Friend 3", age: 32},
        {name: "Friend 4", age: 27},
        {name: "Friend 5", age: 53},
        {name: "Friend 6", age: 30},
        {name: "Friend 7", age: 20},
        {name: "Friend 8", age: 20},
        {name: "Friend 9", age: 20},
        {name: "Friend 10", age: 20},
    ]
    return (
    <FlatList 
        keyExtractor={(friend) => friend.name}
        data={friends} 
        renderItem={({item, index}) => {
            return (
            <View style={styles.listStyle}>
                <Text style={styles.textStyle}>{item.name}</Text>
                <Text>{item.age}</Text>
            </View>)
        }}
    />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontWeight: 'bold',
    },
    listStyle: {
        marginVertical: 50,
        paddingHorizontal: 30,
    }
})

export default ListScreen;