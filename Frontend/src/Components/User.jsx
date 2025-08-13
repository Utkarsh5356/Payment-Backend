import { useState,useEffect } from "react"
import { Button } from "./Button"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export function User(){
    const [user,setUser]=useState([])
    const [filter,setFilter]=useState("")
     useEffect( ()=>{
        axios.get(`http://localhost:3000/api/v1/user/search?filter=${filter}`)
        .then(response => {
           setUser(response.data.Users)
        })
     },[filter])
    return (
        <div class="py-5 px-7">
            <div  class="text-lg font-bold">
                Users 
            </div> 
            <div class="pt-2">
              <input onChange={e => setFilter(e.target.value)} class="px-2 text-md py-1 w-full rounded-[6px] border-1 border-gray-400 shadow-xs" type="text" placeholder="Search users..."/>
            </div>
            <div>
                {user.map((val)=><Search data={val}/>)}
            </div>
        </div>
    )
}

function Search({data}){
  const navigate=useNavigate();
    return (
        <div class="flex justify-between w-full">
            <div class="flex gap-2 pt-2">
               <div class="bg-slate-500 rounded-full h-9 w-9 text-center pt-1 py-1">
                  <div class="text-white font-mono text-lg">{data.FirstName[0]}</div>
               </div>
               <div class="pt-1.5 text-base font-semibold">
                 {data.FirstName} {data.LastName}
               </div>
            </div>
            <div>
              <Button onClick={() => {
                navigate(`/sendmoney?id=${data.id}&name=${data.FirstName} ${data.LastName}`)
              }} label={"Send Money"}></Button>              
            </div>
        </div>
    )
}