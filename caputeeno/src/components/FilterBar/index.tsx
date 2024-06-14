"use client"

import { FilterByPriority } from "./components/FilterByPriority";
import { FilterByType } from "./components/FilterByType";

import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  justify-content: space-between;
`

export function FilterBar() {
  return (
    <FilterContainer>
      <FilterByType />
      <FilterByPriority />
    </FilterContainer>
  )
}
