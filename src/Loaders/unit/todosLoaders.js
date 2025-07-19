const todosLoader = async () =>{
    try{
         const response =await fetch('https://686be60114219674dcc688b8.mockapi.io/todoApp')
         const data = await response.json()        
         return data;
    }
    catch(error){
        return [];
    };
    
}
export default todosLoader