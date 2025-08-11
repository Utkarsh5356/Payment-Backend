
export function Inputbox({label,placeholder}){
    return (
    <div class="pb-2">
         <div class="pb-1">
           <p class="text-start font-medium">{label}</p>
        </div>
        <div class="flex">
            <input class=" border-[1px] border-slate-200 rounded-[3px] w-2xl px-2 py-1 shadow-xs" type="text" placeholder={placeholder}/>
        </div>
    </div>
       
    )
}