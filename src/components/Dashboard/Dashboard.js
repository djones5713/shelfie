import React, { Component } from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component {
  constructor(props){
    super(props)
  }




  render(){
  
  
  const mappedInventory = props.inventory.map(element => {
    return(
      <Product 
       name={element.name}
       price={element.price}
       url={element.url}
      />

    )
  })
  return(
    <div> {mappedInventory}</div>
  )

  }
}