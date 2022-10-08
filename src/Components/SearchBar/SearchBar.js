import React, { Component } from "react";
import "./SearchBar.css";
export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };

    //////////////////////////////
    // bindings
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  ////////////////////////////////
  // Method
  handleSubmit() {
    console.log(this.state.term);
    this.props.onSearch(this.state.term);
  }

  handleTermChange(e) {
    this.setState({ term: e.target.value });
    console.log(this.state.term);
  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} value={this.state.term} />
        <button className="SearchButton" onClick={this.handleSubmit}>
          SEARCH
        </button>
      </div>
    );
  }
}
