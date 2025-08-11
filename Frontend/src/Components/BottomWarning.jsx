import { Link } from "react-router-dom"
export function Bottomwarning({label,linktext,to}){
    return (
    <div class="flex justify-center pt-2 pb-4 gap-1">
        <div class="font-medium">
           <p>{label}</p>
        </div>
        <Link class="underline font-medium" to={to}>{linktext}</Link>
    </div>    
    )
}