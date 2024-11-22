import React from 'react'
import Container from '../../../components/Container'
import BreadCrumb from '../../../components/BreadCrumb'
import UserChangeName from '../components/UserChangeName'

const ProfileNameChangePage = () => {
  return (
    <Container>
        <BreadCrumb currentPageName={"Change Name"} links={[{ name: "User Profile", path: "/dashboard/user-profile" }]} />
        <UserChangeName />
    </Container>
  )
}

export default ProfileNameChangePage