import { Heading } from "../Components/Heading"
import { SubHeading } from "../Components/Sub-Heading" 
import { Inputbox } from "../Components/InputBox"
import { Button } from "../Components/Button"
import { Bottomwarning } from "../Components/BottomWarning"

export function Signin (){
    return (
        <div class="flex justify-center py-29">
            <div class="flex-col jsutify-center">
                <div class="bg-white rounded-lg text-center h-max w-88 shadow-lg px-4">
                    <Heading label={"Sign In"}></Heading>
                    <SubHeading label={"Enter your credentials to access your account"}></SubHeading>
                    <Inputbox label={"Email"} placeholder={"johndoe@gmail.com"}></Inputbox>
                    <Inputbox label={"Password"} placeholder={"123456"}></Inputbox>
                    <Button label={"Sign In"}></Button>
                    <Bottomwarning label={"Dont have an account?"} linktext={"Sign up"} to={"/signup"}></Bottomwarning>
                </div>
            </div>
        </div>
    )
}