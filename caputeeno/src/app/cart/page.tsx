"use client"

import { BackBtn } from "@/components/BackBtn";
import { DefaultPageLayout } from '@/layouts/DefaultPageLayout';

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ProductInCart } from "@/types/Product";
import { formatPrice } from "@/utils/formatPrice";
import { CartList, CartListContainer, CartResultContainer, Container, ShopBtn, TotalItem } from "./styles";
import { CartItem } from "@/components/Cart";
import { Divider } from "@/layouts/divider";

export default function CartPage() {
  const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>("cart-items", [])

  const calculateTotal = (value: ProductInCart[]) => {
    return value.reduce((sum, item) => sum += (item.price_in_cents * item.quantity), 0)
  }

  const cartTotal = formatPrice(calculateTotal(value))
  const deliveryFee = 4000
  const cartTotalWithDelivery = formatPrice(calculateTotal(value) + deliveryFee)

  const handleUpdateQuantity = (id: string, quantity: number) => {
    const newValue = value.map(item => {
      if (item.id !== id) return item
      return { ...item, quantity: quantity }
    })
    updateLocalStorage(newValue)
  }

  const handleDeleteItem = (id: string) => {
    const newValue = value.filter(item => {
      if (item.id !== id) return item
    })

    updateLocalStorage(newValue)
  }

  return (
    <DefaultPageLayout>
      <Container>
        <CartListContainer>
          <BackBtn navigate="/" />
          <h3>Seu carrinho</h3>
          <p>
            Total {value.length} produto(s)
            <span>{cartTotal}</span>
          </p>
          <CartList>
            {value.map(item =>
              <CartItem
                product={item}
                key={item.id}
                handleDelete={handleDeleteItem}
                handleUpdateQuantity={handleUpdateQuantity}
              />)}
          </CartList>
        </CartListContainer>
        <CartResultContainer>
          <h3>Resumo do pedido</h3>
          <TotalItem isBold={false}>
            <p>Subtotal de produtos</p>
            <p>{cartTotal}</p>
          </TotalItem>
          <TotalItem isBold={false}>
            <p>Entrega</p>
            <p>{formatPrice(deliveryFee)}</p>
          </TotalItem>
          <Divider />
          <TotalItem isBold >
            <p>Total</p>
            <p>{cartTotalWithDelivery}</p>
          </TotalItem>
          <ShopBtn>FINALIZAR COMPRA</ShopBtn>
        </CartResultContainer>
      </Container>
    </DefaultPageLayout>
  )
}
