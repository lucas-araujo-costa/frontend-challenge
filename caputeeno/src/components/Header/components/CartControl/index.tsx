import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useRouter } from 'next/navigation'
import { CartIcon } from '@/components/icons/cart-icon'
import { CartCount, Container } from './styles'

export function CartControl() {
  const router = useRouter()
  const { value } = useLocalStorage('cart-items', [])

  const handleNavigateToCart = () => {
    router.push("/cart")
  }

  return (
    <Container onClick={handleNavigateToCart}>
      <CartIcon />
      {value.length > 0 && <CartCount>{value.length}</CartCount>}
    </Container>
  )
}
