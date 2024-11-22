import React from "react";
import BreadCrumb from "../../../components/BreadCrumb";
import Container from "../../../components/Container";
import VoucherTable from "../components/VoucherTable";


const VoucherListPage = ({ currentPageName }) => {
  return (
    <Container>
      <BreadCrumb currentPageName="Voucher Modules" />
      <VoucherTable />
    </Container>
  );
};

export default VoucherListPage;
