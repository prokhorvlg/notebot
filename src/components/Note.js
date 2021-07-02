import React, {Component} from 'react';

class Note {

  render() {
    return (
      <li className="note-title">
        <div className="note-title-color"></div>
        <div className="note-title-box">
          <h3>{this.props.name}</h3>
          <p>?</p>
        </div>
        <div className="note-title-emoji">image</div>
      </li>
    );
  }
}

export default Note;
