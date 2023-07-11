const getUserData = async (id) => {
    
    try {

        const response = await fetch("/api/user/get", {
            method:"POST",
            body: JSON.stringify({id}),
            headers:{
                "Accept": "*/*",
                "Content-Type": "application/json"
            }
        })

        if (!response.ok){
            console.log(`@getUserData: status ${response.status}`)
            return null
        }

        const data = await response.json()
        console.log(`@getUserData: success`, data)
        return data

    } catch (error) {

        console.log(`@getUserData: fetch fail`)
        console.log(error.message)
        return null

    }

}

export default getUserData