import { useEffect, useState, useContext } from "react"
import { useParams, useNavigate } from 'react-router-dom';
import Cookies from "universal-cookie";

import AuthContext from "../contexts/AuthContext/AuthContext"
import AdminContext from "../contexts/AdminContext/AdminContext"

import getUserData from "../utils/ApiFunctions/Users/getUserData"
import getSingleHouseData from "../utils/ApiFunctions/HouseData/getSingleHouseData";
import UserPageHouseCard from "../components/userpageHouseCard";

const UserPage = () => {

    const authContext = useContext(AuthContext)
    const adminContext =  useContext(AdminContext)

    const navigate = useNavigate()

    const [user,setUser] = useState(null)



    useEffect(()=>{

        const cookies = new Cookies()
        if (!cookies.get("HomeLandAuth")) {

            navigate("/login")
            return

        }

        (async()=>{

            const cookies = new Cookies()
            const userCookie = cookies.get("HomeLandUser")
            if (!userCookie){ 
                return null
            }
            const data = await getUserData(userCookie.id)
            console.log(data)
            if (!data) {
                return null
            }
            setUser(data)
            
        })()

    },[])

    return(
        <>
        {
            user?

            <>

            <div className="bg-[#eeeeee] flex flex-col w-fit m-auto p-4 pt-8 mt-4 mb-4">

                <div className="w-fit flex flex-col items-center justify-center m-auto gap-3">
                    <img className="h-[100px] w-[100px] border border-solid border-black rounded-full" src={user.image} alt="img" />
                    <p className="text-center font-bold mt-2 p-2 text-3xl">
                        {user.name}
                    </p>
                </div>

                <div className="flex m-2 p-4 flex-col items-start justify-center">
                    <p><span className="font-bold">email: </span> {user.email}</p>
                    <p><span className="font-bold">address: </span> {user.address}</p>
                    <p><span className="font-bold">phone: </span> {user.phone}</p>
                    <p><span className="font-bold">id: </span> {user.id}</p>
                </div>

            </div>
            
            {

                adminContext.state.adminAuth?

                // ADMIN TOOLS
                <>

                </>
                :
                // USER TOOLS
                <>
                
                <div>

                    <h1 className="text-2xl font-bold text-center mt-6 mb-6">
                        Cart
                    </h1>

                    {
                        user.cart.length!=0?
                        user.cart.map((item_id,index)=>{
                            return(
                            <>
                            
                            <UserPageHouseCard item_id={item_id} key={index}/>
                            
                            </>
                            )
                        })
                        :
                        <div className="text-2xl font-light text-center mt-6 mb-6">
                            Cart is empty
                        </div>
                    }

                </div>
                
                </>

            }

            </>
            :
            <></>
        }

        </>
    )
}
export default UserPage