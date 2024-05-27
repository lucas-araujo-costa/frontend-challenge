import styled from 'styled-components'
import { CartIcon } from './cart-icon'
import { useLocalStorage } from '@/hooks/useLocalStorage'

const CartCount = styled.span`
  width: 17px;
  height: 17px;
  border-radius: 100%;
  padding: 0px 5px;
  font-size: 10px;


  background-color: var(--delete-color);
  color: #fff;
  
  margin-left: -10px;

`

const Container = styled.div`
  position: relative;

`

export default function CartControl() {
  const { value } = useLocalStorage('cart-items')

  return (
    <Container>
      <CartIcon />
      {value.length && <CartCount>{value.length}</CartCount>}
    </Container>
  )
}
