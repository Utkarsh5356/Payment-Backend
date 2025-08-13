import { Heading } from "../Components/Heading"
import { SubHeading } from "../Components/Sub-Heading" 
import { Inputbox } from "../Components/InputBox"
import { Button } from "../Components/Button"
import { Bottomwarning } from "../Components/BottomWarning"
import {useState} from "react"
import axios from "axios"
 
export function Signin (){
    const [UserName,setUsername]=useState("");
    const [Password,setPassword]=useState("");
    return (
        <div class="flex justify-center py-45">
            <div class="flex-col jsutify-center">
                <div class="bg-white rounded-lg text-center h-max w-88 shadow-lg px-4">
                    <Heading label={"Sign In"}></Heading>
                    <SubHeading label={"Enter your credentials to access your account"}></SubHeading>
                    <Inputbox onChange={e => setUsername(e.target.value)} label={"Email"} placeholder={"johndoe@gmail.com"}></Inputbox>
                    <Inputbox onChange={e => setPassword(e.target.value)} label={"Password"} placeholder={"123456"}></Inputbox>
                    <Button onClick={() => axios.post("http://localhost:3000/api/v1/user/SignIn" , {
                        UserName,
                        Password
                    })} label={"Sign In"}></Button>
                    <Bottomwarning label={"Dont have an account?"} linktext={"Sign up"} to={"/signup"}></Bottomwarning>
                </div>
            </div>
        </div>
    )
}