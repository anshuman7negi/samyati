import object from '../assets/objects.svg'

const Partners = () => {
    return(
        <div className="relative flex w-full justify-end ">
        <ul className="w-[90%] flex justify-between font-bold text-2xl text-gray-500 p-11 overflow-x-hidden">
            <li>
                tripadvisor
            </li>
            <li>
                Booking.com
            </li>
            <li>
                Expedia
            </li>
            <li>
                airbnb
            </li>
            <li>
                RBITZ
            </li>
        </ul>
        <img src={object} alt="" className="absolute left-5 " />
        </div>
    )
}

export default Partners;