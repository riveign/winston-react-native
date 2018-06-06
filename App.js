import React, { Component } from 'react';
import { AppRegistry, Text, Button, View, Image } from 'react-native';

export default class MainScreen extends Component {
  
  onPressLearnMore = () => {
    console.log('apretado');
  }
  
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Image source = {require('./src/assets/logo/winston.png')} />
        <Text style={{
          fontSize: 20
        }}>Buen dia Nacho!</Text>
        <Button
          onPress={this.onPressLearnMore}
          title="Comenzar!"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
      />
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => MainScreen);
