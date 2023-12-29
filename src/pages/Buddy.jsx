import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getBuddies } from "../redux/findBuddy";

const Buddy = () => {
    const dispatch = useDispatch();
    const { message, isLoading } = useSelector((store) => store.buddy)

    useEffect(() => {
        dispatch(getBuddies());
    }, [dispatch]);

    if (isLoading) {
        return <h1>Loading....</h1>
    }

    if (message) {
        return (
            <div className="flex flex-col gap-8 p-8 items-center min-h-screen bg-gradient-to-r from-[#ffdcd1] to-[#fdfbfa]">
                <div className="flex justify-between w-4/6 border-2 rounded-lg items-center px-3 shadow-lg">
                    <p className="font-bold text-lg">Find a buddy for your next trip!</p>
                    <p className="font-bold text-3xl">+</p>
                </div>
                <div className="flex flex-col gap-8 w-full">
                    <p className="font-bold text-lg">Join us to our next trip</p>
                    <div className="flex">
                        {
                            message.map((destination) => (
                                <div key={destination.id}
                                    className="flex flex-col items-center gap-2 border-2 shadow-lg rounded-lg pb-2"
                                >
                                    <img src={destination.image} alt="destinations"
                                         className="max-w-[300px] min-h-[400px] rounded-lg"     
                                    />
                                    <p className="font-bold text-xl">
                                        {destination.username}
                                    </p>
                                    <p className="text-lg">
                                        {destination.description}
                                    </p>
                                    <p className="text-white font-bold w-full bg-red-600 text-center">
                                        reservation closing {destination.reservation_closing_date}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }

}

export default Buddy;