import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { UserProfileAvatar } from "../components/user/UserProfileAvatar";

const Profile = () => {
  const { user } = useAuth0();
  return (
    <div>
      <h1>Profile</h1>
      <UserProfileAvatar style={{ width: "50px" }} />
      <h2>name</h2>
      <div>{user.name}</div>
      <h2>nickname</h2>
      <div>{user.nickname}</div>
      <h2>picture</h2>
      <div>{user.picture}</div>
      <h2>email</h2>
      <div>{user.email}</div>
    </div>
  );
};

export default Profile;
