const signupUser = async (userData) => {
    try{

        const response = await fetch("/api/user/signup",{
            method:"POST",
            body: JSON.stringify(userData),
            headers:{
                "Accept": "*/*",
                "Content-Type": "application/json"
            }
        })

        console.log(userData)


        if (response.ok){

            console.log("@signupUser: success")
            const data = await response.json()
            return data

        } else {

            console.log(`@signupUser: status ${response.status}`)

        }

    } catch (error) {

        console.log("@signupUser: fetch fail")
        return null

    }

}

export default signupUser