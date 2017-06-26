import React from 'react';
import Expo from 'expo';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Image picking!</Text>
        <Button title="Pick image" onPress={this._pickImage} />
      </View>
    );
  }

  _pickImage = async () => {
    let pickerResult = await Expo.ImagePicker.launchImageLibraryAsync({
      exif: true,
      allowsEditing: false,
      quality: 0.7,
      base64: true,
    })

    if (pickerResult.cancelled) {
      return
    }

    console.log(pickerResult)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
