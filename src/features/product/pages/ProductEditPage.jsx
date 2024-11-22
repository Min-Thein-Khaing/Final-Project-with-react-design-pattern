import React from 'react'
import BreadCrumb from '../../../components/BreadCrumb'
import ProductEditCart from '../components/ProductEditCart'
import Container from '../../../components/Container'

const ProductEditPage = () => {
  return (
    <section>
      <Container>
      <BreadCrumb 
        currentPageName="Edit Product"
        links={[{ name: "Product Module", path: "/dashboard/product" }]}
      />
      <ProductEditCart />
      </Container>
    </section>
  )
}

export default ProductEditPage