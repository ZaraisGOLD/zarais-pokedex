import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

const ProtectedRoutes = () => {

  const { trainerName } = useSelector(state => state)

  const navigate = useNavigate()

  if (trainerName.length >= 3) {
    return <Outlet />
  } else {
    // return <Navigate to ='/' />
    navigate('/')
  }
}

export default ProtectedRoutes