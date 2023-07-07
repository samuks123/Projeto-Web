const getAllHouseData = async () => {
    try{
        const response = await fetch("/api/housedata")
        if(response.ok){
            console.log("@getAllHouseData: success")
            const data = await response.json()
            return(data)
        }
        else{
            console.log(`@getAllHouseData: status ${response.status}`)
            return null
        }
    }catch(error){
        console.log(error.message)
        return null
    }
}
export default getAllHouseData