
import React, { Component } from "react";
import "./App.css";
import BeyContainer from './BeyContainer.js'
import Favorites from './Favorites.js'

class App extends Component{

  state = {
    beys: []
  }

  componentDidMount(){
    fetch("http://localhost:4000/beys")
    .then(r => r.json())
    .then(beys => {
      this.setState({beys})
    })
  }

  updateFavorite = (id) => {
    const currentBey = this.state.beys.find(bey => bey.id === id)
    const bodyData = {
      favorite: !currentBey.favorite
    }
    fetch(`http://localhost:4000/beys/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyData)
    })
    .then(r => r.json())
    .then(updatedBey => {
      const updatedBeys = this.state.beys.map(bey => {
        if (bey.id === updatedBey.id){
          return updatedBey
        }
        else{
          return bey
        }
      })
      this.setState({beys: updatedBeys})
    })
  }

  render(){
    return (
      <div className="main-container">
        <BeyContainer beys={this.state.beys} updateFavorite={this.updateFavorite}/>
        <Favorites beys={this.state.beys.filter(bey => bey.favorite)} updateFavorite={this.updateFavorite} />
      </div>
    );
  }
};

export default App;
