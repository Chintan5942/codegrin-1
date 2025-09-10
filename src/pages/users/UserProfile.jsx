import React from "react";
import { useParams, Link } from "react-router-dom";

export default function UserProfile() {
  const { userId } = useParams();
  return (
    <div>
      <h2>User Profile</h2>
      <p>User ID: <strong>{userId}</strong></p>
      <Link to={`/users/${userId}/settings`}>Go to settings</Link>
    </div>
  );
}
