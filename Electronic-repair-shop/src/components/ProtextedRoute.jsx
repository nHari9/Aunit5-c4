// /orders and /neworder are protected routes
import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"

export const ProtectedRoute = ({ children }) => {
    const {isAuth}=useContext(AuthContext)

    if(!isAuth){
        return(<>
            <Navigate to={"/orders"} replace={false}/>
            <Navigate to={"/neworder"} replace={false}/>
            </>
        )
    }
    return children
};
