import React from "react";

const BeyCard = (props) => {
  const {name, id, img, updateFavorite} = props

  return (
    
    <div className='bey-card' onClick={() => updateFavorite(id)}>
      <h3>{name}</h3>
      <img src={img} alt={name} />
    </div>
  );
};

export default BeyCard;
