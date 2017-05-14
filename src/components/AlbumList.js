import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// Class-based Component
class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    // axios.get('https://rallycoding.herokuapp.com/api/music_albums/')
    //   .then(response => this.setState({ albums: response.data }));

    axios.get('https://api.spotify.com/v1/search?q=madeon&type=album')
      .then(response => this.setState({ albums: response.data.albums.items }));
  }

  renderAlbums() {
    return this.state.albums.map(album => 
      <AlbumDetail key={album.id} album={album} />
    );
  }

  render() {
    console.log(this.state.albums);

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
