import React from "react";

const BeyCard = (props) => {
  const {name, id, img, updateFavorite} = props

  // const handleClick = () => {
  //   console.log(id)
  //   console.log(props)
  //   updateFavorite(id)
  // }
  return (
    
    <div className='bey-card' onClick={() => updateFavorite(id)}>
      <h3>{name}</h3>
      <img src={img} />
    </div>
  );
};

export default BeyCard;
