import { useState } from "react"
import AdminContext from "./AdminContext"

const AdminContextProvider = ({children}) => {
    const [adminAuth,setAdminAuth] = useState(false)
    return (
        <AdminContext.Provider value={{

            state: {
                adminAuth
            },
            
            setAdminAuth

        }}>
            {children}
        </AdminContext.Provider>
    )
}
export default AdminContextProvider