import React from 'react'
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({children}) => {
    const currentUser = true;
    if(!currentUser){
        return <Navigate to="/chat" replace={true} />
    }
  return (
    <div>PrivateRoute</div>
  )
}
