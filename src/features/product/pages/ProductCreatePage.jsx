import React from "react";
import BreadCrumb from "../../../components/BreadCrumb";
import ProductCreateCart from "../components/ProductCreateCart";
import Container from "../../../components/Container";

const ProductCreatePage = () => {
  return (
    <section>
      <Container>
        <BreadCrumb
          currentPageName="Create Product"
          links={[{ name: "Product Module", path: "/dashboard/product" }]}
        />
        <ProductCreateCart />
      </Container>
    </section>
  );
};

export default ProductCreatePage;
