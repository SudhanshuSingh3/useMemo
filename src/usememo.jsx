import { useEffect,useMemo, useState } from "react";

 export default function Usememo(){
     const[apiResponse,setApiResponse]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((data) => data.json())
          .then((response) => setApiResponse(response));
          
    },[])
    
    const values=useMemo(()=>{
        const users=[]
        for(let item of apiResponse){
            const user={
                name:item.name,
                username:item.username,
                email:item.email,
                city:item.address.city,
            }
            users.push(user)
        }
        return users
    },[apiResponse])
   
    return(<>
    {values.map((item)=>{
        return <p>{item.name}</p>
    })}
    </>)
}
