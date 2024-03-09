import { useState } from "react";
import { ReactTyped } from "react-typed";
import { useAppSelector } from "../../redux-toolkit/hooks";
import { RootState } from "../../redux-toolkit/store";


const Navbar = () => {


    const view_screen_value = useAppSelector((state: RootState) => { state.viewScreenOption.value })
    console.log(view_screen_value);
    const [menu, setmenu] = useState(false);


    const MenuClick = () => {
        setmenu(!menu);
    }



    return (
        <>
            <div className="flex flex-col">
                <div className="rounded-full shadow-xl m-3 mx-auto w-10/12 min-h-20 flex flex-row items-center medium:justify-between justify-center bg-transparent">
                    <div className="ml-5 flex flex-row items-center">
                        <a href={'/'} className="flex items-center">
                            <span className="material-symbols-outlined sm:text-4xl text-2xl">sunny</span>
                            <p className="sm:text-2xl text-xl">  <ReactTyped strings={['WEATHER APPLICATION']} typeSpeed={80} cursorChar="" /></p>
                        </a>
                    </div>
                    <div className="hidden medium:block" >
                        <button className="bg-slate-400 text-white rounded-full p-3 hover:cursor-pointer hover:bg-slate-700 mr-2" >Real Time Weather</button>
                        <button className="bg-slate-400 text-white rounded-full p-3 hover:cursor-pointer hover:bg-slate-700 mr-5" >Forecast Weather</button>
                    </div>
                    <div className="medium:hidden ml-14">
                        <button onClick={MenuClick} ><span className="material-symbols-outlined relative top-1">{`${menu ? 'close' : 'menu'}`}</span></button>
                    </div>
                </div>
                {menu && (
                    <div className="medium:hidden flex justify-center">
                        <button className="bg-slate-400 text-white rounded-full p-3 hover:cursor-pointer hover:bg-slate-700 mr-2" >Real Time Weather</button>
                        <button className="bg-slate-400 text-white rounded-full p-3 hover:cursor-pointer hover:bg-slate-700 mr-5" >Forecast Weather</button>
                    </div>
                )}
            </div>
        </>

    )
}

export default Navbar;
