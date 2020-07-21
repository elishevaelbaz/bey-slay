import React from "react";
import BeyCard from "./BeyCard.js"

const Favorites = (props) => {

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

  console.log("favorite props:", props)
  return (
    <div className="favorites">
      <h1>BEYVORITES</h1>
      {renderBeys()}
    </div>
  );
  
}

export default Favorites;