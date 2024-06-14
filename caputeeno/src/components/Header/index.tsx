"use client"

import { Saira_Stencil_One } from 'next/font/google'
import { PrimaryInputWSearchIcon } from "./components/PrimaryInputWSearchIcon"
import { CartControl } from "./components/CartControl"
import { useFilter } from "@/hooks/useFilter"
import { Logo, TagHeader } from './styles'

const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin']
})

export function Header() {
  const { search, setSearch } = useFilter()
  return (
    <TagHeader>
      <Logo className={sairaStencil.className} href="/">Capputeeno</Logo>
      <div>
        <PrimaryInputWSearchIcon
          value={search}
          handleChange={setSearch}
          placeholder="Procurando por algo específico?"
        />
        <CartControl />
      </div>
    </TagHeader>
  )
}
