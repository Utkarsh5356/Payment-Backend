import {Heading} from "../Components/Heading"
import {SubHeading} from "../Components/Sub-Heading"
import {Inputbox} from "../Components/InputBox"
import {Button} from "../Components/Button"
import {Bottomwarning} from "../Components/BottomWarning"
import { useState } from "react"
import axios from "axios"

export function Signup(){
  const [FirstName,setFirstname]=useState("");
  const [LastName,setLastname]=useState("");
  const [UserName,setUsername]=useState("");
  const [Password,setPassword]=useState("");

    return (
      <div class="flex justify-center py-29">
        <div class="flex-col justify-center">
            <div class="bg-white rounded-lg text-center h-max w-88 shadow-lg px-4">
              <Heading label={"Sign Up"}></Heading>
              <SubHeading label={"Enter your information to create an account"}></SubHeading>
              <Inputbox onChange={e => setFirstname(e.target.value)} label={"First Name"} placeholder={"John"}></Inputbox>
              <Inputbox onChange={e => setLastname(e.target.value)} label={"Last Name"} placeholder={"Doe"}></Inputbox>
              <Inputbox onChange={e => setUsername(e.target.value)} label={"Email"} placeholder={"johndoe@gmail.com"}></Inputbox>
              <Inputbox onChange={e => setPassword(e.target.value)} label={"Password"} placeholder={"123456"}></Inputbox>
              <Button onClick={async () =>{
                  const response= await axios.post('http://localhost:3000/api/v1/user/SignUp',{
                  UserName, 
                  FirstName,
                  LastName,
                  Password
              })
               localStorage.setItem("token",response.data.token)
            } 
              } label={"Sign Up"}></Button>
              <Bottomwarning label={"Already have an account?"} linktext={"Sign in"} to={"/signin"}></Bottomwarning>
            </div>
          
        </div>
      </div>
    )
}