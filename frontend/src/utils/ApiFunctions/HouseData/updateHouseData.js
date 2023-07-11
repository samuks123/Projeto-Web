const updateHouseData = async (id, patchData) => {
    try{

        const response = await fetch (`/api/housedata/${id}`,{

            method:"PATCH",
            body: JSON.stringify(patchData),
            headers:{
                "Accept": "*/*",
                "Content-Type": "application/json"
            }

        })

        if (response.ok){

            console.log("@updateHouseData: success")
            const data = await response.json()
            return data

        }else{
            
            console.log(`@updateHouseData: status ${response.status}`)
            return null

        }

    }catch{

        console.log("@updateHouseData: fetch fail")
        return null
    }
}
export default updateHouseData