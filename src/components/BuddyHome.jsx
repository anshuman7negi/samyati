import girl from '../assets/girl.svg'

const BuddyHome = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-4 py-14">
            <div className="pr-2">
                <div className="relative bg-yellow-400 lg:w-[570px] h-[400px] rounded-r-full z-0">
                    <img src={girl} alt="" className="absolute bottom-0 translate-x-[-50%] left-[50%] max-h-[500px]" />
                </div>
            </div>
            <div className="flex flex-col gap-3 p-2 items-center lg:items-baseline justify-center z-20">
                <p className="text-[#e95495] font-bold text-lg">TRAVEL POINT</p>
                <h2 className="font-bold text-2xl text-center sm:text-left">We helping you find your Buddy</h2>
                <p className="w-[70%] lg:w-full text-center lg:text-left">Contrary to popular belief, Lorem Ipsum is not simply random text.
                     It has roots in a piece of classical Latin literature from 45 BC.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                <div className="shadow-xl bg-white rounded-lg w-[200px] px-2 py-10 flex flex-col gap-4 items-center">
                    <h2 className="text-orange-500 text-3xl font-bold">2k+</h2>
                    <p className="text-lg">Happy Customer</p>
                </div>
                <div className="bg-white shadow-xl rounded-lg w-[200px] px-2 py-10 flex flex-col gap-4 items-center">
                    <h2 className="text-orange-500 text-3xl font-bold">1k+</h2>
                    <p className="text-lg">Reviews</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default BuddyHome;