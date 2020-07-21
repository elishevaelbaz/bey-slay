import React, { Component } from "react";
import BeyCard from "./BeyCard.js"

export default class Favorites extends Component {

  renderBeys = () => {
    return this.props.beys.map(bey => {
      return <BeyCard key={bey.id} 
        id={bey.id} 
        name={bey.name} 
        img={bey.img}
        favorite={bey.favorite}
        updateFavorite={this.props.updateFavorite}
      />
    })
  }

  render() {
    console.log("favorite props:", this.props)
    return (
      <div className="favorites">
        <h1>BEYVORITES</h1>
        {this.renderBeys()}
      </div>
    );
  }
}
