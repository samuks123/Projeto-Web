const addItemToCard = async (user_id,item_id) => {
    
    try {

        const response = await fetch("/api/user/purchase", {

            method: "POST",
            body: JSON.stringify({ user_id, item_id }),
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json"
            }

        })
        
        if (!response.ok) {

            console.log(`@addItemToCart: status ${response.status}`)
            return null

        }
        
        const data = await response.json()
        console.log(`@addItemToCart: success`)
        return data

    } catch (error) {

        console.log(`@addItemToCart: fetch fail`)
        return null

    }

}

export default addItemToCard