import axios from "axios";

// Set BashURL to var
const baseURL = 'https://686be60114219674dcc688b8.mockapi.io'
// To craate instance using create method in axios for cutom configuration
const instance = axios.create({
    baseURL, 
    headers:{
                "Content-Type":"application/json"
            }
})
export default instance