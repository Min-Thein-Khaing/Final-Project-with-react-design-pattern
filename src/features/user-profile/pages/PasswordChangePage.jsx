import React from 'react'
import Container from '../../../components/Container'
import BreadCrumb from '../../../components/BreadCrumb'
import UserChangePassword from '../components/UserChangePassword'

const PasswordChangePage = () => {
  return (
    <Container>
        <BreadCrumb currentPageName={"Change Password"} links={[{ name: "User Profile", path: "/dashboard/user-profile" }]} />
        <UserChangePassword />
    </Container>
  )
}

export default PasswordChangePage