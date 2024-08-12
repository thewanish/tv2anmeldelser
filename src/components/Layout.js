import { Outlet } from "react-router-dom";

import React from 'react'
// laster matchende child komponent i route løsningen til react
const Layout = () => {
  return (
    <main>
      <Outlet/>
    </main>
  )
}

export default Layout