
import React, { useEffect, useState } from "react";
import "../App.css";
import * as yup from "yup";
import { profile_API } from "./API";
import { EditProfileForm } from "./EditProfileForm";


export default function EditProfile() {
    
    const [profile, setProfile] = useState(null);
    useEffect(() => {
      fetch(`${profile_API}/profile/1`, {
        method: "GET"
      })
      .then((res) => res.json())
      .then((profile) => setProfile(profile));
    }, []);
  
  
  
    return profile ? <EditProfileForm profile={profile} /> : "Loading";
}