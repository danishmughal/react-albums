import React from 'react';
import { View, Text } from 'react-native';

// Will be solely a presentational component
// Can be a functional component
const AlbumDetail = (props) => {
  return (
    <View>
      <Text>{props.album.title}</Text>
    </View>
  );
};

export default AlbumDetail;
