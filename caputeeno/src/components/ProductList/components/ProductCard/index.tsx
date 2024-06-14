import { Divider } from "@/layouts/Divider"
import { formatPrice } from "@/utils/formatPrice"
import { useRouter } from "next/navigation"
import { Card } from "./styles"

interface ProductCardProps {
  image: string
  title: string,
  price: number,
  id: string
}

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