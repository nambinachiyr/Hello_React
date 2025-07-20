import instance from "../instances/instance";

const todoServices = {
    getTodo:async () => {
         try{
        // Set instance
         const response =await instance.get('/todoApp')
    //    console.log(response)       
         return response.data;
    }
    catch(error){
        return [];
    };
    },
    getTodoByID: async (id)=>{
        try{
            // const {id} = params
            const response =await instance.get(`/todoApp/${id}`)
            return response.data
        }
        catch(error){
            return {}
        }
    },
    createTodo: async ()=>{

    },
    updateTodo: async (id)=>{

    },
    deleteTodo:async (id)=>{
        instance.delete(`/todoApp/${id}`)
    }
}
export default todoServices