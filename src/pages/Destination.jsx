import temple from '../assets/temple.jpg'

const Destination = () => {
    return (
        <div className="flex flex-col px-4 sm:px-24 py-14 gap-12">
            <div className="flex items-center justify-between">
                <p className="flex flex-col gap-1 font-bold text-3xl">
                    <span className="text-[#e95495] text-lg font-bold">TOP DESTINATION</span>
                    Explore top destination
                </p>
                <div className="flex gap-3">
                    <button className="p-4 rounded-full border-2 font-bold hover:bg-purple-600 hover:text-white shadow-xl">&lt;</button>
                    <button className="p-4 rounded-full border-2 font-bold hover:bg-purple-600 hover:text-white shadow-xl">&gt;</button>
                </div>
            </div>

            <div className="flex overflow-x-hidden gap-24 justify-center">

                <div className="flex flex-col border-2 shadow-xl min-w-[300px] items-center gap-5 rounded-2xl bg-[#fdefeb] ">
                    <img src={temple} alt="" className="max-h-[500px] rounded-t-2xl " />
                    <div className="">
                        <div className="flex font-bold justify-between p-3">
                            <h2>Paradise Beach</h2>
                            <p className="text-[#e95495] text-lg">$550</p>
                        </div>
                        <p className="text-center p-3">
                            What looked like a small patch of purple grass, above five feet.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col border-2 shadow-xl min-w-[300px] items-center gap-5 rounded-2xl bg-[#fdefeb]">
                    <img src={temple} alt="" className="max-h-[500px] rounded-t-2xl " />
                    <div className="">
                        <div className="flex font-bold justify-between p-3">
                            <h2>Paradise Beach</h2>
                            <p className="text-[#e95495] text-lg">$550</p>
                        </div>
                        <p className="text-center p-3">
                            What looked like a small patch of purple grass, above five feet.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col border-2 shadow-xl min-w-[300px] items-center gap-5 rounded-2xl bg-[#fdefeb]">
                    <img src={temple} alt="" className="max-h-[500px]  rounded-t-2xl " />
                    <div className="">
                        <div className="flex font-bold justify-between p-3">
                            <h2>Paradise Beach</h2>
                            <p className="text-[#e95495] text-lg">$550</p>
                        </div>
                        <p className="text-center p-3">
                            What looked like a small patch of purple grass, above five feet.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Destination;