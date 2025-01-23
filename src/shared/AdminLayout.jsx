import React from 'react'
import AdminNavbar from '../components/AdminNavbar/AdminNavbar'
import { Outlet } from 'react-router-dom'

function AdminLayout({children}) {
  return (
    <>
        <AdminNavbar></AdminNavbar>
        <Outlet></Outlet>
    </>
  )
}

export default AdminLayout