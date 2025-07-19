
import instance from "../../instances/instance"

const todoLoader = async ({params})=>{
   try{
        // console.log(params)
        let {id} = params
    //    To minimice the axios with the use of creating instance component
        const response =await instance.get(`/todoApp/${id}`)        
        return response.data
   }
   catch(error){
    return {};
   }
}
export default todoLoader