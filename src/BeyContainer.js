import React from "react";
import BeyCard from "./BeyCard.js"

 const BeyContainer = (props) => {

  const renderBeys = () => {
    return props.beys.map(bey => {
      return <BeyCard key={bey.id} 
        id={bey.id} 
        name={bey.name} 
        img={bey.img}
        favorite={bey.favorite}
        updateFavorite={props.updateFavorite}
      />
    })
  }
 
  return (
    <div className="bey-container">
      <h1>BEYDEX</h1>
      {renderBeys()}
    </div>
  );
}

export default BeyContainer