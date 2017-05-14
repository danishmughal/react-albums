import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

// Will be solely a presentational component
// Can be a functional component
const AlbumDetail = (props) => {
  return (
    <Card>
      <Text>{props.album.title}</Text>
    </Card>
  );
};

export default AlbumDetail;
