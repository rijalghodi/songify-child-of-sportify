import React, { Component } from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

export default class Playlist extends Component {
  ///////////////////////////////////////////////
  // constructor
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  ////////////////////////////////////////////////
  // methods
  handleNameChange(e) {
    this.props.onNameChange(e.target.value);
  }

  ///////////////////////////////////////////////
  // render
  render() {
    return (
      <div className="Playlist">
        <label htmlFor="#rename">Playlist Name:</label>
        <input id="rename" defaultValue={"New Playlist"} onChange={this.handleNameChange} />
        {/*-- Add a TrackList component --*/}
        <button className="Playlist-save" onClick={this.props.onSave}>
          SAVE TO SPOTIFY
        </button>
        <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={false} />
      </div>
    );
  }
}
