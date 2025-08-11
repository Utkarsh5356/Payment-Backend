
export function Button({label}){
    return (
        <div class="pt-2">
            <button type="button" class="text-white w-full bg-black hover:bg-black focus:outline-none cursor-pointer focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-black dark:hover:bg-gray-900">
                {label}
            </button>

        </div>
    )
}