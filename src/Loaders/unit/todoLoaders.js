
import instance from "../../instances/instance"
import todoServices from "../../todoServices/todoServices";

const todoLoader = async ({params})=>{
   try{
        // console.log(params)
        let {id} = params
        const todos = await todoServices.getTodoByID(id);
        return todos;
    //    To minimice the axios with the use of creating instance component
               
        
   }
   catch(error){
    return {};
   }
}
export default todoLoader