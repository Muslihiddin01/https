
let api = "https://6821ee2fb342dce8004c65e8.mockapi.io/User"

async function get() {
    try {
        let response = await fetch(api)
        let data = await response.json()
        console.log(data);
        
    } catch (error) {
        console.error(error);
    }
}
