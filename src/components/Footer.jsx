import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.png';
import youtube from '../assets/youtube.svg'

const Footer = () => {
    return (
        <footer className="">
            <ul className="flex items-center justify-center gap-8">
                <li className="rounded-full bg-white p-1 shadow-xl">
                    <a href="https://github.com/anshuman7negi"><img src={github} alt="" className="w-[40px] rounded-full " /></a>
                </li>
                <li className="rounded-full  bg-white p-1 shadow-xl">
                    <a href="https://twitter.com/AnshumanNegi108"
                    ><img src={twitter} alt="" className="w-[40px] rounded-full"
                        /></a>
                </li>
                <li className="rounded-full  bg-white p-1 shadow-xl">
                    <a href="https://www.linkedin.com/in/anshuman-singh-negi-33779a224/"
                    ><img src={linkedin} alt="" className="w-[40px] rounded-full"
                        /></a>
                </li>
                <li className="rounded-full  bg-white p-1 shadow-xl">
                    <a href="https://www.youtube.com/@Anshuman_Negi"
                    ><img src={youtube} alt="" className="w-[40px] rounded-full"
                        /></a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;