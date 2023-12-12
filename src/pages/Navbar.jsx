

const Navbar = () => {
    return(
        <nav className="flex item-center justify-between px-9 py-4 font-bold">
            <h1 className="text-xl">SAMYATI</h1>
            <ul className="hidden sm:flex gap-8">
                <li>Home</li>
                <li>Discover</li>
                <li>Buddy</li>
                <li>Temples</li>
            </ul>
            <button className="hidden sm:block text-white bg-[#5D50C6] py-2 px-3 rounded-3xl">
                Login
            </button>

            <div className="flex flex-col sm:hidden gap-1">
                <hr className="w-12 rounded-xl h-1 bg-black" />
                <hr className="w-12 h-1 rounded-xl bg-black"/>
                <hr className="w-12 h-1 rounded-xl bg-black"/>
            </div>
        </nav>
    )
}

export default Navbar;