import { ProductInCart } from "@/types/Product"
import { formatPrice } from "@/utils/formatPrice"
import { ChangeEvent } from "react"
import { DeleteIcon } from "../icons/delete-icon"
import { Item, SelectQuantity } from "./styles"

interface CartItemProps {
  product: ProductInCart,
  handleUpdateQuantity(id: string, quantity: number): void
  handleDelete(id: string): void
}

export function CartItem({ product, handleUpdateQuantity, handleDelete }: CartItemProps) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    handleUpdateQuantity(product.id, Number(e.target.value))
  }

  return (
    <Item>
      <button onClick={() => handleDelete(product.id)} aria-label="Deletar">
        <DeleteIcon />
      </button>
      <img src={product.image_url} />
      <div>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <div>
          <SelectQuantity value={product.quantity} onChange={handleChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </SelectQuantity>
          <span>{formatPrice(product.price_in_cents)}</span>
        </div>
      </div>
    </Item>
  )
}
