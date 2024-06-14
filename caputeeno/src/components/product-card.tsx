import { formatPrice } from "@/utils/format-price"
import { useRouter } from "next/navigation"
import styled from "styled-components"
import { Divider } from "./divider"

interface ProductCardProps {
  image: string
  title: string,
  price: number,
  id: string
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 0px 0px 4px 4px;

  cursor: pointer;

  width: 256px;

  img {
    width: 256px;
    height: 300px;
  }

  h3 {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2);
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: var(--shapes-dark)
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding: 8px 12px;
    width: 100%;
  }

`

export function ProductCard(props: ProductCardProps) {
  const router = useRouter()
  const price = formatPrice(props.price)

  const handleNavigate = () => {
    router.push("/product?id=" + props.id)
  }

  return (
    <Card onClick={handleNavigate}>
      <img src={props.image} alt="" />
      <div>
        <h3>{props.title}</h3>
        <Divider />
        <p>{price}</p>
      </div>
    </Card>
  )
}