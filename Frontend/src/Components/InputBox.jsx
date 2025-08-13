
export function Inputbox({label,placeholder,onChange}){
    return (
    <div class="pb-2">
         <div class="pb-1">
           <p class="text-start text-md font-medium">{label}</p>
        </div>
        <div class="flex">
            <input onChange={onChange} class=" border-[1px] border-slate-200 text-md rounded-[3px] w-2xl px-2 py-1 shadow-xs" type="text" placeholder={placeholder}/>
        </div>
    </div>
       
    )
}