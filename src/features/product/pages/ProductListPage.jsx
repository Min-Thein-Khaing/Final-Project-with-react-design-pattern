import BreadCrumb from "../../../components/BreadCrumb";
import Container from "../../../components/Container";
import ProductTable from "../components/ProductTable";

const ProductListPage = ({ currentPageName }) => {
  return (
    <Container>
      <BreadCrumb currentPageName="Product List" />
      <ProductTable />
    </Container>
  );
};

export default ProductListPage;
