"use client"

import { useProducts } from '@/hooks/useProducts'
import { ProductCard } from './components/ProductCard'
import { ListContainer } from './styles'

export function ProductsList() {
  const { data } = useProducts()

  return (
    <ListContainer>
      {data?.map(product => <ProductCard
        key={product.id}
        title={product.name}
        price={product.price_in_cents}
        image={product.image_url}
        id={product.id}
      />
      )}
    </ListContainer>
  )
}
