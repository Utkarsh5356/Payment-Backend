import { Appbar } from "../Components/Appbar"
import { Balance } from "../Components/Balance"
import { User } from "../Components/User"

export function Dashboard(){
    return (
        <div class="p-5">
            <div>
               <Appbar></Appbar>
               <Balance value={"10,000"}></Balance>
               <User></User>
            </div>
        </div>
    )
}