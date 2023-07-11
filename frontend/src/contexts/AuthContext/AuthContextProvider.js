import AuthContext from "./AuthContext"
import AdminContext from "../AdminContext/AdminContext"
import { useEffect, useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import Cookies from "universal-cookie"
import getUserData from "../../utils/ApiFunctions/Users/getUserData"

const AuthContextProvider = ({children}) => {
    
    const adminContext = useContext(AdminContext)
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
        adminContext.setAdminAuth(false)
        navigate("/Login")

    }

    useEffect(()=>{

        if(cookies.get("HomeLandAuth")){

            setAuth(true)
            console.log("cookie",cookies.get("HomeLandUser").id)
            ;(async()=>{
                const data = await getUserData(cookies.get("HomeLandUser").id)
                if (data) { 
                    setUserInfo(data)
                }
            })();

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
