import React, { Component } from 'react';
import { Text, View, Image, Linking } from 'react-native';
import axios from 'axios';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// Will be solely a presentational component
// Can be a functional component
class AlbumDetail extends Component {

  playAlbum(albumId) {
    console.log(albumId);
    axios.get('https://api.spotify.com/v1/albums/' + albumId)
      .then(response => console.log(response.data.tracks.items[0].preview_url));
  }

  render() {
    // Destructuring album from props
    const { name, artists, images, id } = this.props.album;

    const { 
      headerContentStyle,
      headerTextStyle,
      thumbnailStyle, 
      thumbnailContainerStyle,
      imageStyle
    } = styles;

    return (
      <Card>
        <CardSection>
          <View style={thumbnailContainerStyle}>
            <Image 
              source={{ uri: images[0].url }} 
              style={thumbnailStyle} 
            />
          </View>

          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{name}</Text>
            <Text>{artists[0].name}</Text>
          </View>
        </CardSection>

        <CardSection>
          <Image 
            source={{ uri: images[0].url }}
            style={imageStyle}
          />
        </CardSection>

        <CardSection>
          <Button onPress={() => this.playAlbum(id)}>
            Play
          </Button>
        </CardSection>
      </Card>
    );
  }
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 2,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
