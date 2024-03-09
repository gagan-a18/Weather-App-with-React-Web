import SearchBar from "../SearchBar/SearchBar";


export default function OptionsSection() {
    return (
        <div className="flex mb-2">
            <div className="rounded-3xl shadow-2xl w-9/12 min-h-14 bg-transparent mx-auto p-2 flex flex-row justify-center items-center" >
                <div>
                    <SearchBar />
                </div>
            </div>
        </div>
    )
}
