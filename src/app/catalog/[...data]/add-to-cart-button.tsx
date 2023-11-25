'use client'

import { useState } from 'react'

export default function AddToCartButton() {
  const [count, setCount] = useState(0)

  function handleAddToCart() {
    setCount((prev) => prev + 1)
  }

  function handleRemoveItem() {
    setCount((prev) => prev - 1)
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleAddToCart}>ADD TO CART</button>
      <button onClick={handleRemoveItem}>REMOVE CART</button>
    </div>
  )
}
