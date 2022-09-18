import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import ImageDetail from './ImageDetail';

const ImageScreen = ( {navigation} ) => {
  return (
    <View >
        <Text>Image Details</Text>
        <ImageDetail title="Forest" imageSrc={require("../../assets/images/forest.jpg")} score={1} />
        <ImageDetail title="Beach" imageSrc={require("../../assets/images/beach.jpg")} score={2}/>
        <ImageDetail title="Mountain" imageSrc={require("../../assets/images/mountain.jpg")} score={3}/>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default ImageScreen;
