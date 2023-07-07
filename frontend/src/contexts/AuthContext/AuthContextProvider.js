import AuthContext from "./AuthContext"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import Cookies from "universal-cookie"

const AuthContextProvider = ({children}) => {
    const [auth,setAuth] = useState(false)
    const [userInfo,setUserInfo] = useState(null)
    const navigate = useNavigate()
    const cookies = new Cookies()

    const logout = () => {
        
        cookies.remove("HomeLandAuth")
        cookies.remove("HomeLandUser")
        cookies.remove("userHouseInfo")
        setUserInfo(null)
        setAuth(false)
        navigate("/Login")

    }

    useEffect(()=>{

        if(cookies.get("HomeLandAuth")){
            setAuth(true)
            setUserInfo(cookies.get("HomeLandUser"))
        }

    },[])
    return(
        <AuthContext.Provider value={{

            state:{
                auth,
                userInfo,
            },
            setAuth,
            setUserInfo,
            logout

        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
