import { FilterContext } from '@/contexts/FilterContextProvider'
import { useContext } from 'react'

export function useFilter() {
  return useContext(FilterContext)
}
