import axios from "axios";
import instance from "../../instances/instance";

const todosLoader = async () =>{
    try{
        // Set instance
         const response =await instance.get('/todoApp')
    //    console.log(response)       
         return response.data;
    }
    catch(error){
        return [];
    };
    
}
export default todosLoader