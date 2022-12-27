import Link from "next/link"
function NavBar({onClick}) {
    return ( 
        <nav className="grid grid-cols-1 p-5 bg-[#040e16] w-28 h-[100vh] float-left">
            <button className="hover:bg-[#3b42a4] mb-96 transition-all rounded-3xl" onClick={onClick}>
            <img src="add.svg" alt="" className="w-18" />
            </button>
            <button className="hover:bg-[rgb(59,66,164)] transition-all rounded-3xl">
                <Link href="./dashboard/help">
                    <img src="help.png" alt="" className="w-18" />
                </Link>
            </button>
            <button className="hover:bg-[#3b42a4] transition-all rounded-3xl">
            <img src="settings.svg" alt="" className="w-18" />
            </button>
            
        </nav>
     );
}

export default NavBar;