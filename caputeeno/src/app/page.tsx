"use client"

import { ProductsList } from '@/components/ProductList';
import { DefaultPageLayout } from '@/layouts/DefaultPageLayout';
import { FilterBar } from '@/components/FilterBar';
import { PageWrapper } from './styles';

export default function Home() {
  return (
    <DefaultPageLayout>
      <PageWrapper>
        <FilterBar />
        <ProductsList />
      </PageWrapper>
    </DefaultPageLayout>
  )
}
