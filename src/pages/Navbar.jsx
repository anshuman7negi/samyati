

const Navbar = () => {
    return(
        <nav className="flex item-center justify-between px-9 py-4 font-bold">
            <h1 className="text-xl">SAMYATI</h1>
            <ul className="flex gap-8">
                <li>Home</li>
                <li>Discover</li>
                <li>Buddy</li>
                <li>Temples</li>
            </ul>
            <button className="text-white bg-[#5D50C6] py-2 px-3 rounded-3xl">
                Login
            </button>
        </nav>
    )
}

export default Navbar;