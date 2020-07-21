import React from "react";
import BeyCard from "./BeyCard.js"

export default class BeyContainer extends React.Component {

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
    return (
      <div className="bey-container">
        <h1>BEYDEX</h1>
        {this.renderBeys()}
      </div>
    );
  }
}
