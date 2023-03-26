import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import axios from "axios"

function Profile() {
  const { user } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({});
  const id = user.id

  useEffect(() => {
    axios.get(`http://localhost:4040/api/profile/${id}`).then(
      res => {
        // console.log(res.data);
        setUserInfo(res.data)
      }
    ).catch(
      err => {
        console.log(err)
      }
    )
  }, [id])

  if(!user || !userInfo) {
    return(
      <div>Loading...</div>
    )
  }
  else {
    return (
      <div>
        <h2>Profile</h2>
        <h3>{userInfo.name}</h3>
        <h3>{userInfo.email}</h3>
        <h3>{userInfo.bio}</h3>
        <h3>{userInfo.about}</h3>
        
        {/* <h3>{userInfo.name}</h3> */}
      </div>
    )
  }


}

export default Profile