import { Inputbox } from "../Components/InputBox"

export function Sendmoney(){
   return (
      <div class="flex justify-center py-55">
        <div class="flex-cols justify-center">
           <div class="bg-white text-center rounded-sm h-max w-88 shadow-lg px-4"> 
                <div class="text-3xl font-bold pt-5 pb-2">
                   Send Money
                </div>
                <div class="flex gap-3 pt-15">
                    <div class="bg-green-500 rounded-full h-9 w-9 text-center pt-1 py-1">
                       <div class="text-white font-mono text-lg">A</div>
                    </div>
                    <div class="text-xl font-bold pt-0.5"> 
                      Friend's Name
                    </div>
                </div>
                <Inputbox label={"Amount (in Rs)"} placeholder={"Enter amount"}></Inputbox>
                <div class="pt-2 pb-4">
                    <button type="button" class="text-white w-full bg-green-500 focus:outline-none cursor-pointer focus:ring-green-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  dark:hover:bg-green-400">
                      Initiate Transfer
                    </button>
                </div>
           </div>
        </div>
      </div>
    )
}