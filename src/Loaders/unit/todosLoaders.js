import axios from "axios";

const todosLoader = async () =>{
    try{
        // Set axios library
         const response =await axios.get('https://686be60114219674dcc688b8.mockapi.io/todoApp',{
            header:{
                "Content-Type":"application/json",
            },     
         })
       console.log(response)       
         return response.data;
    }
    catch(error){
        return [];
    };
    
}
export default todosLoader