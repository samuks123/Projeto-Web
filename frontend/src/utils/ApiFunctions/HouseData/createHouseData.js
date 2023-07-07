const createHouseData = async (housedata) => {
    try{
        const response = await fetch ("/api/housedata",{
            method:"POST",
            body: JSON.stringify(housedata),
            headers:{
                "Accept": "*/*",
                "Content-Type": "application/json"
            }
        })
        if (response.ok){
            console.log("@createHouseData: success")
            const data = await response.json()
            return data
        }else{
            console.log(`@createHouseData: status ${response.status}`)
            return null
        }
    }catch(error){
        console.log("@createHouseData: fetch error")
        return null
    }
}
export default createHouseData