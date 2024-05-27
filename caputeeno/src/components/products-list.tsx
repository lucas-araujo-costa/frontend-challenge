"use client"

import { useProducts } from '@/hooks/useProducts'
import React from 'react'

export function ProductsList() {
  const { data } = useProducts()
  console.log(data)
  return (
    <></>
  )
}
