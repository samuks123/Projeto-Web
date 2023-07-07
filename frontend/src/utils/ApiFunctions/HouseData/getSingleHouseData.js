const getSingleHouseData = async (id) => {
    try{
        const response = await fetch (`/api/housedata/${id}`)
        if (response.ok){
            console.log("@getSingleHouseData: success")
            const data = await response.json()
            return data
        }else{
            console.log(`@getSingleHouseData: status ${response.status}`)
            return null
        }
    }catch(error){
        console.log("@getSingleHouseData: fetch error")
        return null
    }
}
export default getSingleHouseData