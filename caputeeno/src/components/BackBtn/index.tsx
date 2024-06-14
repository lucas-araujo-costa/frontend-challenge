import { BackIcon } from "../icons/back-icon";
import { useRouter } from "next/navigation";
import { Button } from "./styles";

interface BtnProps {
  navigate: string
}

export function BackBtn({ navigate }: BtnProps) {
  const router = useRouter()
  const handleNavigate = () => {
    router.push(navigate)
  }

  return (
    <Button onClick={handleNavigate}>
      <BackIcon />
      Voltar
    </Button>
  )
}