import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getBuddies } from "../redux/findBuddy";

const Buddy = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBuddies());
    },[dispatch]);

    return (
        <div className="flex flex-col gap-8 p-8 items-center min-h-screen bg-gradient-to-r from-[#ffdcd1] to-[#fdfbfa]">
            <div className="flex justify-between w-4/6 border-2 rounded-lg items-center px-3 shadow-lg">
                <p className="font-bold text-lg">Find a buddy for your next trip!</p>
                <p className="font-bold text-3xl">+</p>
            </div>
            <div className="flex flex-col gap-3 w-full">
                <p className="font-bold text-lg">Join us to our next trip</p>
            </div>
        </div>
    )
}

export default Buddy;