import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext"
import { Navigate,Outlet } from "react-router-dom"

export default function PrivateRoute() {
    
      const { currentUser} = useContext(AuthContext);
  return currentUser ? <Outlet /> : <Navigate to="/" />
}
