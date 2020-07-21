import React, { Component } from "react";

export default class Features extends Component {
  render() {
    return (
      <>
        <ul className="main">
          <li>
            <p>Audio Samples</p>
            <br />
            <p>Learn how to pronounce and sound more natural</p>
          </li>
          <li>
            <p>Detailed Etymology</p>
            <br />
            <p>Get into the weeds with grammar and context</p>
          </li>
          <li>
            <p>Quiz and Occurence Preferences</p>
            <br />
            <p>Stay Sharp and focused on items that matter to you!</p>
          </li>
        </ul>
      </>
    );
  }
}
