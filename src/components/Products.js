import React from 'react'

export default function Products(props) {
  return (
  <div className="productItem">
      <img src={ props.image } />
      <div><h3>{ props.name }</h3></div>
      <div>{ props.price }$</div>
    </div>
  );
}
