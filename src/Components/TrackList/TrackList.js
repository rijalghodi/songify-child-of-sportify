import React, { Component } from "react";
import "./TrackList.css";
import Track from "../Track/Track";

export default class TrackList extends Component {
  render() {
    const tracks = this.props.tracks;
    return (
      <div className="TrackList">
        {/*-- You will add a map method that renders a set of Track components  --*/}
        {tracks && tracks.map((track, i) => <Track key={i} track={track} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} />)}
      </div>
    );
  }
}
