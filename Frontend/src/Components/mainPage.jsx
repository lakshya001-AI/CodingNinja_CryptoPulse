import React from 'react'
import {Link} from "react-router-dom"

function MainPage() {
  return <>
  <h1>Hello this is Main Page</h1>
  <Link to="/">logout</Link>
  </>
}

export default MainPage;