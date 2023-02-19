
import React, { useEffect, useState } from "react";
import "../App.css";
import * as yup from "yup";
import { API } from "./API";
import { EditUserForm } from "./EditUserForm";
import { useParams } from "react-router-dom";


export default function UserEdit() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    useEffect(() => {
      fetch(`${API}/users/${id}`, {
        method: "GET"
      })
      .then((res) => res.json())
      .then((user) => setUser(user));
    }, []);
  
  
  
    return user ? <EditUserForm user={user} /> : "Loading";
}