import {Heading} from "../Components/Heading"
import {SubHeading} from "../Components/Sub-Heading"
import {Inputbox} from "../Components/InputBox"
import {Button} from "../Components/Button"
import {Bottomwarning} from "../Components/BottomWarning"
export function Signup(){
    return (
      <div class="flex justify-center py-29">
        <div class="flex-col justify-center">
            <div class="bg-white rounded-lg text-center h-max w-88 shadow-lg px-4">
               <Heading label={"Sign Up"}></Heading>
               <SubHeading label={"Enter your information to create an account"}></SubHeading>
               <Inputbox label={"First Name"} placeholder={"John"}></Inputbox>
               <Inputbox label={"Last Name"} placeholder={"Doe"}></Inputbox>
               <Inputbox label={"Email"} placeholder={"johndoe@gmail.com"}></Inputbox>
               <Inputbox label={"Password"} placeholder={"123456"}></Inputbox>
               <Button label={"Sign Up"}></Button>
               <Bottomwarning label={"Already have an account?"} linktext={"Sign in"} to={"/signin"}></Bottomwarning>
            </div>
          
        </div>
      </div>
    )
}