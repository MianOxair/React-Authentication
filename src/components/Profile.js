import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && ( 
     <div>
        <img src={user.picture} alt={user.name} />
        <h1>{user.family_name}</h1>
        <h3>{user.given_name}</h3>
        <p>{user.email}</p>
        {/*<JSONPretty data={user} />
        {/* {JSON.stringify(user, null, 2)} */}
      </div>
    )
  )
}

export default Profile
