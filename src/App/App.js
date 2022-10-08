import "./App.css";
import React from "react";
import SearchResults from "../Components/SearchResults/SearchResults";
import Playlist from "../Components/Playlist/Playlist";
import SearchBar from "../Components/SearchBar/SearchBar";

import Spotify from "../util/Spotify";

class App extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    ///////////////////////////////////
    // State
    this.state = {
      searchResults: [
        // searchResults is an array of objects like this:
        // {
        //   name: "name1",
        //   artist: "artis1",
        //   album: "album1",
        //   id: "111",
        // },
      ],
      playlistName: "My Playlist",
      playlistTracks: [
        // playlistTracks is an array of objects like this:
        // {
        //   name: "playlistName1",
        //   artist: "playlistArtist1",
        //   album: "playlistAlbum1",
        //   id: "1234",
        // },
      ],
    };

    //////////////////////////////////////
    // bindings
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  ////////////////////////////////////////
  // Add track
  addTrack(track) {
    if (this.state.playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }

    const tracks = this.state.playlistTracks;
    tracks.push(track);

    this.setState({
      playlistTracks: tracks,
    });
  }

  ////////////////////////////////////////
  // Remove track
  removeTrack(track) {
    const remainingTracks = this.state.playlistTracks.filter((savedTrack) => savedTrack.id !== track.id);
    this.setState({
      playlistTracks: remainingTracks,
    });
  }

  ///////////////////////////////////////
  // Update playlist name
  updatePlaylistName(name) {
    this.setState({
      playlistName: name,
    });
  }

  ////////////////////////////////////////
  // Search
  search(term) {
    Spotify.search(term).then((searchResults) => {
      this.setState({ searchResults: searchResults });
    });
  }

  ///////////////////////////////////////
  // Save Playlist
  savePlaylist() {
    const trackUris = this.state.playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName: "New Playlist",
        playlistTracks: [],
      });
    });
  }

  ///////////////////////////////////////
  // render
  render() {
    return (
      <div>
        <h1>
          So<span className="highlight">ngi</span>fy
        </h1>
        <div className="App">
          {/*-- Add a SearchBar component --*/}
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            {/*-- Add a SearchResults component */}
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            {/*-- Add a Playlist component --*/}
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
