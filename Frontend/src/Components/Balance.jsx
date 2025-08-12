
export function Balance({value}){
   return (
    <div class="p-7">
        <div class="flex gap-5 w-48 p-5 border-1 rounded-2xl border-black">
           <div class="pt-1">
             <img class="h-10" src="https://www.reshot.com/preview-assets/icons/ALN3T89FH4/wallet-ALN3T89FH4.svg"/>
           </div>
           <div>
              <div class="text-sm font-normal">
                Your Balance
              </div>
              <div class="text-lg font-medium">
                Rs {value}
              </div>
           </div>
        </div>
    </div>
   )
}