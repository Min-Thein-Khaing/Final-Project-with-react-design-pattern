import React from 'react'

import BreadCrumb from '../../../components/BreadCrumb'
import VoucherDetailUi from '../components/VoucherDetailUi'
import Container from '../../../components/Container'

const VoucherDetailPage = () => {
  return (
    <Container>
      <BreadCrumb currentPageName={"Voucher-Detail"} links={[{ name: "Voucher Module", path: "/dashboard/voucher" }]} />
      <VoucherDetailUi />
    </Container>

  )
}

export default VoucherDetailPage