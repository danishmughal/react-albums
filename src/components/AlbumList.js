import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
import Input from './Input';

// Class-based Component
class AlbumList extends Component {
  // Initial State
  state = { albums: [], searchTerm: 'Madeon' };

  componentWillMount() {
    this.retrieveResults();
  }

  // Retrieves album data for the current searchTerm state
  retrieveResults() {
    axios.get('https://api.spotify.com/v1/search?q=' + this.state.searchTerm + '&type=album')
      .then(response => this.setState({ albums: response.data.albums.items }));
  }

  renderAlbums() {
    return this.state.albums.map(album => 
      <AlbumDetail key={album.id} album={album} />
    );
  }

  render() {
    return (
      <ScrollView>
        <Input 
          value={this.state.searchTerm} 
          placeholder='Search for an Artist'
          onSubmitEditing={searchTerm => this.retrieveResults()}
          onChangeText={searchTerm => this.setState({ searchTerm })}
          returnKeyType='search'
        />
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
