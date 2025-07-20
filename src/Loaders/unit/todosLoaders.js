
import todoServices from "../../todoServices/todoServices";

const todosLoader = async () =>{
   try{
       const todo = await todoServices.getTodo();
       return todo;
    }
    catch(error){
        return []
    }
    
}
export default todosLoader