import AddToCartButton from './add-to-cart-button'

interface ProductProps {
  params: {
    data: string[]
  }
}

export default async function Product({ params }: ProductProps) {
  const [productId, size, color] = params.data
  await new Promise((resolve) => setTimeout(resolve, 3000))

  const response = await fetch('http://api.github.com/users/EvertonFS7')

  return (
    <div>
      <div>Product - {productId}</div>
      <div>Size - {size}</div>
      <div>Color - {color}</div>
      <AddToCartButton />
    </div>
  )
}
