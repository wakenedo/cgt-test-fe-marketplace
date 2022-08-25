import React from 'react'
import pictureA from '../../assets/Products/a.jpg'
import pictureB from '../../assets/Products/b.jpg'


const Product = () => {
  return (
    <>
      <div>
        <h1>Product B</h1>
        <p>Price: 30 USD</p>

        <button onClick={() => console.warn('Not implemented!')}>
          Add to cart
        </button>

        <div><img src={pictureB} width={640} /></div>
      </div>
      <div>
        <h1>Product A</h1>
        <p>Price: 10 USD</p>

        <button onClick={() => console.warn('Not implemented!')}>
          Add to cart
        </button>

        <div><img src={pictureA} width={640} /></div>
      </div>
    </>
  )
}

export default Product