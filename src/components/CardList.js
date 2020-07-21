import React, { Component } from "react";
import Route from "react-router-dom";
import CardCreate from "./LangSelection";

export default class LangChoice extends Component {
  render() {
    return (
      <>
        <h2>Your Cards!</h2>
        <section className="LangChoice">
          {this.props.cards.map((card, index) => {
            return (
              <Route
                key={index}
                render={({ history }) => (
                  // 'notes' prop will be entire notes array from state
                  <CardCreate key={index} history={history} card={card} />
                )}
              />
            );
          })}
        </section>
      </>
    );
  }
}