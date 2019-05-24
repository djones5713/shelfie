import React, { Component } from 'react';
import axios from 'axios';
import Header from '../src/components/Header/Header';
import Product from '../src/components/Product/Product';
import '../src/App.css';
// import Product from './components/Product/Product';




export default class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: [

      ]
    }
    }

    componentDidMount(){
      this.getInventory();
    }

 getInventory(){
   axios.get('/api/items').then(response => {
     this.setState({
       inventory: response.data
     })
   })
 }
 

  render(){

    return (
    <div className="app-container">
      <Header />
      <Card
        name={element.name}
        price={element.price}
        url={element.url}
      
      />
  
    </div>
    )
  }
}

