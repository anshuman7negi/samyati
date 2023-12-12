import temple from '../assets/temple.jpg'

const Services = () => {
    return (
        <div className="flex flex-col lg:flex-row  p-4 sm:p-12 mt-16 lg:items-center gap-8 lg:justify-between ">
            <div className="flex flex-col items-center sm:items-baseline text-lg gap-1">
                <span className="font-bold text-[#e95495]">SERVICES</span>
                <p className="text-center sm:text-left text-xl font-bold flex flex-col">Our top <span>value categroies for you</span></p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
                 <div className="flex flex-col border-2 shadow-xl w-[300px] py-12 px-2 items-center gap-5 bg-[#fdefeb] rounded-xl">
                    <img src={temple} alt="" className="w-[50px] h-[50px] rounded-full" />
                    <h2 className="font-bold">Best Tour Guid</h2>
                    <p className="text-center">
                        What looked like a small patch of purple grass, above five feet.
                    </p>
                 </div>

                 <div className="flex flex-col border-2 shadow-xl w-[300px] py-12 px-2 items-center gap-5 bg-[#fdefeb] rounded-xl">
                    <img src={temple} alt="" className="w-[50px] h-[50px] rounded-full" />
                    <h2 className="font-bold">Best Tour Guid</h2>
                    <p className="text-center">
                        What looked like a small patch of purple grass, above five feet.
                    </p>
                 </div>

                 <div className="flex flex-col border-2 shadow-xl w-[300px] py-12 px-2 items-center gap-5 bg-[#fdefeb] rounded-xl">
                    <img src={temple} alt="" className="w-[50px] h-[50px] rounded-full" />
                    <h2 className="font-bold">Best Tour Guid</h2>
                    <p className="text-center">
                        What looked like a small patch of purple grass, above five feet.
                    </p>
                 </div>
            </div>
        </div>
    )
}

export default Services