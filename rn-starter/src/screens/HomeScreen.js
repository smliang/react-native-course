import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ( {navigation} ) => {
  const name = "Sarah"
  return (
    <View style={styles.homeView}>
      <Text style={styles.title}>Getting started with React Native!</Text>
      <Text style={styles.name}>My name is {name}</Text>

      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate("Components")} 
      />
      <Button
        onPress={() => navigation.navigate("List")} 
        title="Go to List Demo"
      />
      <Button
        onPress={() => navigation.navigate("Images")} 
        title="Go to Images List Demo"
      />
      <Button
        onPress={() => navigation.navigate("Colors")} 
        title="Go to Colors Demo"
      />
      <Button
        onPress={() => navigation.navigate("ColorMaker")} 
        title="Go to Color Maker"
      />
      <Button
        onPress={() => navigation.navigate("TextScreen")} 
        title="Go to Text Screen"
      />
      <Button
        onPress={() => navigation.navigate("BoxScreen")} 
        title="Go to Box Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
  },
  name: {
    fontSize: 20,
  },
  homeView: {
    margin: 20
  },
  listButton: {
    textAlign: 'center',
    fontSize: 18,
    color: "blue"
  }
});

export default HomeScreen;
