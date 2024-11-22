import React from 'react'
import Container from '../../../components/Container'
import BreadCrumb from '../../../components/BreadCrumb'
import UserChangeImage from '../components/UserChangeImage'

const ProfileImageChangePage = () => {
  return (
    <Container>
        <BreadCrumb currentPageName={"Change Image"} links={[{ name: "User Profile", path: "/dashboard/user-profile" }]} />
        <UserChangeImage />
    </Container>
  )
}

export default ProfileImageChangePage