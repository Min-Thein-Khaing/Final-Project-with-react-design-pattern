import React from "react";
import BreadCrumb from "../../../components/BreadCrumb";
import UserProfileCard from "../components/UserProfileCard";
import Container from "../../../components/Container";

const UserProfilePage = () => {
  return (
    <Container>
      <BreadCrumb currentPageName="User Profile" />
      <UserProfileCard />
    </Container>
  );
};

export default UserProfilePage;
