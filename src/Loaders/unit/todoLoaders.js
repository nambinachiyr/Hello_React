const todoLoader = async ({params})=>{
   try{
        console.log(params)
        let {id} = params
        const response =await fetch(`https://686be60114219674dcc688b8.mockapi.io/todoApp/${id}`) 
        const data = await response.json()
        return data
   }
   catch(error){
    return {};
   }
}
export default todoLoader