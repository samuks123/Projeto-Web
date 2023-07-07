const deleteHouseData = async (id) => {
    try{
        const response = await fetch (`/api/housedata/${id}`,{
            method:"DELETE"
        })
        if (response.ok){
            console.log("@deleteHouseData: success")
            const data = await response.json()
            return (data)
        }else{
            console.log(`@deleteHouseData: status ${response.status}`)
        }
    }catch{
        console.log("@deleteHouseData: fetch error")
    }
}
export default deleteHouseData