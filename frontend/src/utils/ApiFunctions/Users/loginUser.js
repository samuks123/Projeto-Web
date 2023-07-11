const loginUser = async (userData) => {
    try{

        const response = await fetch("/api/user/login",{
            method:"POST",
            body: JSON.stringify(userData),
            headers:{
                "Accept": "*/*",
                "Content-Type": "application/json"
            }
        })

        if (response.ok){

            console.log("@loginUser: success")
            const data = await response.json()
            return data

        } else {

            console.log(`@loginUser: status ${response.status}`)

        }

    } catch (error) {

        console.log("@loginUser: fetch fail")
        return null

    }

}

export default loginUser