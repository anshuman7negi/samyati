import mountain from '../assets/mountain.jpg';
import river from '../assets/river.jpg';
import temple from '../assets/temple.jpg';
import worldmap from '../assets/worldmap.svg'

const Home = () => {
    return (
        <div className="py-[8rem] px-24 grid lg:grid-cols-2 md:gap-16 lg:gap-3">
            <div className="flex flex-col gap-8">
                <button className="max-w-[200px] bg-white text-[#f85e9f] font-bold px-3 py-3 rounded-full">
                    Explore the world!
                </button>
                <p className="flex flex-col font-bold text-4xl gap-1">
                    Travel <span className="text-[#f85e9f]">top destination </span> of the world
                </p>
                <p className="text-gray-700">
                    We always make our customer happy by providing
                    as many choices as possible
                </p>
            </div>
            <div className="relative flex gap-4 z-20">
                <div className="flex flex-col gap-3">
                    <img src={river} alt="temple" className="w-[300px] rounded-t-full" />
                    <img src={mountain} alt="mountain" className="w-[300px] rounded-b-full" />
                </div>
                <img src={temple} alt="kedanath" className="w-[300px] lg:h-[400px] rounded-xl" />
                <img src={worldmap} alt="world map" className="absolute top-[-100px] drop-shadow-lg z-0" />
            </div>
        </div>
    )
}

export default Home;