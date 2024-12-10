import React from 'react'
import {Link, useNavigate, useSearchParams} from "react-router-dom"

function MainPage() {

    const navigate = useNavigate();

    function logoutUser(){
        localStorage.removeItem("authToken");
        navigate("/");
    }
  return <>
  <h1>Hello this is Main Page</h1>
  <button onClick={logoutUser}>logout</button>
  </>
}

export default MainPage;