import React from "react";
import { Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>App</Text>
        <View style={styles.boxView}>
            <View style={styles.redBox}></View>
            <View style={styles.greenBox}></View>
            <View style={styles.blueBox}></View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        // borderWidth: 3,
    },
    textStyle: {
        height: 100,
        // borderWidth: 2,
        textAlign: "center",
        fontSize: 30
    },
    boxView: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    redBox: {
        height: 100,
        width: 100,
        backgroundColor: "red"
    },
    greenBox: {
        height: 100,
        width: 100,
        backgroundColor: "green",
        top: 100
    },
    blueBox: {
        height: 100,
        width: 100,
        backgroundColor: "blue"
    }
})

export default BoxScreen;