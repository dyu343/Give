import React from "react";
import AppLayout from "../layouts/AppLayout";
import GroupSearch from "../components/GroupSearch";
import ProfileContainer from "../components/ProfileContainer";
import NavBar from "../components/NavBar";

const Profile = () => {
  return (
    <div className="w-3/4 h-screen mx-auto">
      <NavBar />
      <ProfileContainer center={
        <div>
        </div>
      }/>
    </div>
  );
}

export default Profile;
