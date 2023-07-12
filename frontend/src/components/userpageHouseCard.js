import { useEffect, useState } from "react"
import getSingleHouseData from "../utils/ApiFunctions/HouseData/getSingleHouseData"

const UserPageHouseCard = ({item_id}) => {
    const [house,setHouse] = useState(null)
    useEffect(()=>{

        (async()=>{

            const data = await getSingleHouseData(item_id)
            if (data) { console.log(data); setHouse(data) }

        })()

    },[])

    return(
        <>
        
        {
            house?
            <div className="bg-[#aaeeaa] mt-2 p-3 pl-6 pr-6 w-fit m-auto">
                       
            <div className="flex gap-8 p-3 w-fit m-auto">
                
                <img 
                 className="h-[120px] w-[120px] border border-[#353535] object-cover rounded-full"
                 src={house.image} 
                 alt="" 
                />
                
                <div className="flex flex-col justify-center">
                    <p className="text-2xl font-bold">
                        {house.name}
                    </p>
                    <p>
                        {house.address}
                    </p>
                </div>

            </div>

            <div className="flex justify-center gap-2 mt-5">

                <div
                 className="text-center bg-[#008500] p-2 rounded-md text-[#ffffff] w-[90px] cursor-pointer hover:bg-[#00aa00] "
                 onClick={()=>{
                    
                 }}
                >
                    
                    Purchase
                </div>

                <div
                 className="text-center bg-[#850000] p-2 rounded-md text-[#ffffff] w-[90px] cursor-pointer hover:bg-[#aa0000] "
                 onClick={()=>{
                    
                 }}
                >
                    
                    Remove
                </div>

            </div>

            </div>
            :
            <></>
            
        }
        
        </>
    )
}
export default UserPageHouseCard