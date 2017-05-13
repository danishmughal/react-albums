import React, { Component } from 'react';
import { View, Text } from 'react-native';

// Class-based Component
class AlbumList extends Component {
  componentWillMount() {
    console.log('Component will mount in AlbumList');
  }
  render() {
    return (
      <View>
        <Text>Album List!</Text>
      </View>
    );
  }
}

export default AlbumList;
