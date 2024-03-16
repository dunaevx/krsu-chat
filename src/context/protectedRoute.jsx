import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({children, user}) =>{
    console.log(user)
    return user ? children : <Navigate to='/welcom'></Navigate>;
}