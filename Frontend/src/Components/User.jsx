import { useState } from "react"
import { Button } from "./Button"

export function User(){
    const [user,setUser]=useState([
        {
          firstName:"Utkarsh",
          lastName:"Wadbudhe"
        },
        {
          firstName:"Raju",
          lastName:"Kumar"
        }
    ])
    return (
        <div class="py-5 px-7">
            <div  class="text-lg font-bold">
                Users 
            </div> 
            <div class="pt-2">
              <input class="px-2 text-md py-1 w-full rounded-[6px] border-1 border-gray-400 shadow-xs" type="text" placeholder="Search users..."/>
            </div>
            <div>
                {user.map((val)=><Search data={val}/>)}
            </div>
        </div>
    )
}

function Search({data}){
    return (
        <div class="flex justify-between w-full">
            <div class="flex gap-2 pt-2">
               <div class="bg-slate-500 rounded-full h-9 w-9 text-center pt-1 py-1">
                  <div class="text-white font-mono text-lg">{data.firstName[0]}</div>
               </div>
               <div class="pt-1.5 text-base font-semibold">
                 {data.firstName} {data.lastName}
               </div>
            </div>
            <div>
              <Button label={"Send Money"}></Button>              
            </div>
        </div>
    )
}