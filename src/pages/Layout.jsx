import Partners from "../components/Partners";
import Destination from "./Destination";
import Home from "./Home"
import Navbar from "./Navbar"
import Services from "./Services";


const Layout = () => {
    return(
        <div className="flex flex-col bg-gradient-to-r from-[#ffdcd1] to-[#fdfbfa]">
          <Navbar />
          <Home />
          <Partners />
          <Services />
          <Destination />
        </div>
    )
}

export default Layout;