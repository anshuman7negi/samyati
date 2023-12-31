import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteBuddies, getBuddies } from "../redux/findBuddy";
import FindBuddyForm from "../components/FindBuddyForm";
import { Link } from "react-router-dom";

const Buddy = () => {
    const dispatch = useDispatch();
    const { message, isLoading } = useSelector((store) => store.buddy)
    const [showForm, setDisplayForm] = useState(false);
    console.log(message.length);

    useEffect(() => {
        dispatch(getBuddies());
    }, [dispatch]);

    const trimword = (word) => word.split(' ').slice(0, 10).join(' ');

    const toogleForm = () => setDisplayForm(!showForm);

    if (isLoading) {
        return <h1>Loading....</h1>
    }

    if (message) {
        return (
            <div className="flex flex-col gap-8 p-2 md:p-8 items-center min-h-screen bg-gradient-to-r from-[#ffdcd1] to-[#fdfbfa] z-0">
                <div
                    className="w-full flex justify-between md:w-4/6 border-2 rounded-lg items-center px-3 shadow-lg"
                    onClick={toogleForm}
                >
                    <p className="font-bold text-lg">Find a buddy for your next trip!</p>
                    <p className="font-bold text-3xl">+</p>
                </div>
                {showForm && <FindBuddyForm onClose={toogleForm} />}
                <div className="flex flex-col gap-8 w-full">
                    <p className="font-bold text-lg">Join us to our next trip</p>
                    <div className="flex flex-wrap justify-around gap-8">
                        {
                            message.map((destination) => (
                                <Link to={`/reservation/${destination.id}`} key={destination.id}>
                                    <div
                                        className="relative flex flex-col items-center gap-2 border-2 shadow-lg overflow-hidden rounded-lg pb-2 w-[300px]"
                                    >
                                        <img src={destination.image} alt="destinations"
                                            className="max-w-[300px] min-h-[400px] rounded-lg"
                                        />
                                        <p className="font-bold text-xl">
                                            {destination.username}
                                        </p>
                                        <p className="text-lg">
                                            {trimword(destination.description)}
                                        </p>
                                        <p className="text-white font-bold w-full bg-red-600 text-center">
                                            reservation closing {destination.reservation_closing_date}
                                        </p>
                                        <button
                                            className="absolute top-0 right-0 rounded-bl-full bg-red-600 font-bold text-white px-4 py-2 pl-8 pb-8"
                                            onClick={() => dispatch(deleteBuddies(destination.id))}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }

}

export default Buddy;