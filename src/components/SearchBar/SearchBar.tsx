

export default function SearchBar() {
    return (

        <form >
            <div className="flex flex-row" >
                <input type="text" placeholder="enter city, state or country" className="h-10 sm:w-[400px] w-[350px] rounded-full px-3" />
                <button>
                    <span className="material-symbols-outlined relative top-1 right-8">search</span>
                </button>
            </div>


        </form>


    )
}
