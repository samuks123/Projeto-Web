import { useEffect, useState, useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import AdminContext from "../contexts/AdminContext/AdminContext"
import getSingleHouseData from "../utils/ApiFunctions/HouseData/getSingleHouseData"
import updateHouseData from "../utils/ApiFunctions/HouseData/updateHouseData"
import convertToBase64 from "../utils/converToBase64"

const EditProperty = () => {

    const adminContext = useContext(AdminContext)

    const {id} = useParams()
    const [data,setData] = useState(null)
    const navigate = useNavigate()

    useEffect(()=>{
        if (adminContext.state.adminAuth){

            (async()=>{
                const housedata = await getSingleHouseData(id)
                if(housedata){setData(housedata)}
            })()

        } else {

            navigate("/")

        }
    },[])

    return(
        <>
        
        {
            data?
            <>
            <div className="bg-white p-8 max-w-[700px] m-auto">
            <div className="text-4xl text-center m-3">Edit Property</div>
            <form onSubmit={async (e)=>{
                e.preventDefault()
                const result = await updateHouseData(id,data)
                if (data) {
                    navigate("/")
                }

            }}>

                    {/*type*/}
                    <div className="mb-4">
                        <label htmlFor="houseType" className="block font-semibold mb-1">
                            House Type
                        </label>
                        <select
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                            id='selcetion option'
                            value={data.type}
                            onChange={(e)=>{setData(previous=>({...previous, type: e.target.value}))}}
                            required
                        >
                            <option value="House">House</option>
                            <option value="Apartment">Apartment</option>

                        </select>
                    </div>

                    {/*name*/}
                    <div className="mb-4">
                        <label htmlFor="houseName" className="block font-semibold mb-1">
                            House Name
                        </label>
                        <input
                            type="text"
                            id="houseName"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                            value={data.name}
                            onChange={(e)=>{setData(previous=>({...previous, name: e.target.value}))}}
                            required
                        />
                    </div>

                    {/*description*/}
                    <div className="mb-4">
                        <label htmlFor="houseDescription" className="block font-semibold mb-1">
                            House Description
                        </label>
                        <textarea
                            id="houseDescription"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                            value={data.description}
                            onChange={(e)=>{setData(previous=>({...previous, description: e.target.value}))}}
                            required
                        />
                    </div>

                    {/*image*/}
                    <div className="mb-4">
                        <label htmlFor="houseImage" className="block font-semibold mb-1">
                            House Image
                        </label>
                        <img 
                         className="h-40 object-contain"
                         src={data.image} 
                         alt="image"/>
                        <input
                            type="file"
                            id="houseImage"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                            onChange={async function (e) {
                                const file = e.target.files[0]
                                const img64 = await convertToBase64(file)
                                setData(previous=>({...previous, image: img64}))
                            }}
                        />
                    </div>

                    <div className="flex mb-4">

                        {/*country*/}
                        <div className="w-1/2 mr-2">
                            <label htmlFor="country" className="block font-semibold mb-1">
                                Country
                            </label>
                            <select
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                                id='selcetion option'
                                value={data.country}
                                onChange={ (e)=>{setData(previous=>({...previous, country: e.target.value}))} }
                                required
                            >
                                <option value="United States">United States</option>
                                <option value="Canada">Canada</option>
                                <option value="Brazil">Brazil</option>
                            </select>
                        </div>
                        
                        {/*adress*/}
                        <div className="w-1/2 ml-2">
                            <label htmlFor="address" className="block font-semibold mb-1">
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                                value={data.address}
                                onChange={ (e)=>{setData(previous=>({...previous, address: e.target.value}))} }
                                required
                            />
                        </div>

                    </div>

                    <div className="flex mb-4">

                        {/*bedrooms*/}
                        <div className="w-1/4 mr-2">
                            <label htmlFor="bedrooms" className="block font-semibold mb-1">
                                Bedrooms
                            </label>
                            <input
                                type="number"
                                id="bedrooms"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                                value={data.bedrooms}
                                onChange={ (e)=>{setData(previous=>({...previous, bedrooms: e.target.value}))} }
                                required
                            />
                        </div>

                        {/*bathrooms*/}
                        <div className="w-1/4 mx-2">
                            <label type="number" htmlFor="bathrooms" className="block font-semibold mb-1">
                                Bathrooms
                            </label>
                            <input
                                type="number"
                                id="bathrooms"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                                value={data.bathrooms}
                                onChange={ (e)=>{setData(previous=>({...previous, bathrooms: e.target.value}))} }
                                required
                            />
                        </div>

                        {/*surface*/}
                        <div className="w-1/4 mx-2">
                            <label htmlFor="surface" className="block font-semibold mb-1">
                                Surface (sq ft)
                            </label>
                            <input
                                type="number"
                                id="surface"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                                value={data.surface}
                                onChange={ (e)=>{setData(previous=>({...previous, surface: e.target.value}))} }
                                required
                            />
                        </div>

                    </div>

                    <div className="flex mb-4">

                        {/*year*/}
                        <div className="w-1/2 mr-2">
                            <label htmlFor="year" className="block font-semibold mb-1">
                                Year
                            </label>
                            <input
                                type="number"
                                id="year"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                                value={data.year}
                                onChange={ (e)=>{setData(previous=>({...previous, year: e.target.value}))} }
                                required
                            />
                        </div>
                        
                        {/*price*/}
                        <div className="w-1/2 ml-2">
                            <label htmlFor="price" className="block font-semibold mb-1">
                                Price ($)
                            </label>
                            <input
                                type="number"
                                id="price"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                                value={data.price}
                                onChange={ (e)=>{setData(previous=>({...previous, price: e.target.value}))} }
                                required
                            />
                        </div>
                    </div>
                    
                    {/*agent image*/}
                    <div className="mb-4">
                        <label htmlFor="agentImage" className="block font-semibold mb-1">
                            Agent Image
                        </label>
                        <img 
                         className="h-40 object-contain"
                         src={data.agent.image} 
                         alt="image"/>
                        <input
                            type="file"
                            id="agentImage"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                            onChange={async(e)=>{
                                const file = e.target.files[0]
                                const img64 = await convertToBase64(file)
                                setData(previous=>({...previous, agent: {...previous.agent, image: img64 }}))
                            }}
                        />
                    </div>

                    {/*agent name*/}
                    <div className="mb-4">
                        <label htmlFor="agentName" className="block font-semibold mb-1">
                            Agent Name
                        </label>
                        <input
                            type="text"
                            id="agentName"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                            value={data.agent.name}
                            onChange={ (e)=>{setData(previous=>({...previous, agent: {...previous.agent, name: e.target.value }}))} }
                            required
                        />
                    </div>

                    {/*agent phone*/}
                    <div className="mb-4">
                        <label htmlFor="agentPhone" className="block font-semibold mb-1">
                            Agent Phone
                        </label>
                        <input
                            type="text"
                            id="agentPhone"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                            value={data.agent.phone}
                            onChange={ (e)=>{setData(previous=>({...previous, agent: {...previous.agent, phone: e.target.value }}))} }
                            required
                        />
                    </div>


                <button
                 type="submit"
                 className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Submit
                </button>
                
            </form>
            </div>
            </>
            :
            <>no data</>
        }

        </>
    )
}
export default EditProperty