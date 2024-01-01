import { useState } from "react";
import { useDispatch } from "react-redux";
import { findBuddies } from "../redux/findBuddy";


const FindBuddyForm = ({ onClose }) => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        username: '',
        image: '',
        location: '',
        description: '',
        reservation_closing_date: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(findBuddies(formData));

        setFormData({
            username: '',
            image: '',
            location: '',
            description: '',
            reservation_closing_date: '',
        });

        onClose();
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="z-20 fixed top-2/4 left-2/4 p-8 -translate-x-2/4 -translate-y-2/4 min-h-[90%] backdrop-blur-xl w-11/12 sm:w-5/6 lg:w-4/6 rounded-lg flex flex-col gap-4 bg-gray-500 shadow-lg bg-opacity-60"
        >
            <h1 className="font-bold text-lg text-center">Details About Your Destination</h1>
            <div className="flex flex-col gap-2 font-bold font-lg">
                <label htmlFor="username">Destination Name ?</label>
                <input type="text" name="username" onChange={handleInputChange}
                    className="rounded" required/>
            </div>
            <div className="flex gap-2 flex-col font-bold font-lg">
                <label htmlFor="image">Select Destination Images From Your Devise ?</label>
                <input type="text" name="image" onChange={handleInputChange}
                    className="rounded" required/>
            </div>
            <div className="flex flex-col gap-2 font-bold font-lg">
                <label htmlFor="location">Enter the Location of Destination ?</label>
                <input type="text" name="location" onChange={handleInputChange}
                    className="rounded" required/>
            </div>
            <div className="flex flex-col gap-2 font-bold font-lg">
                <label htmlFor="description">Description abour Destination ? (minimum 20 wordss)</label>
                <textarea name="description" id="description" cols="30" rows="3" onChange={handleInputChange} className="rounded" required ></textarea>
            </div>

            <div className="flex flex-col gap-2 font-bold font-lg">
                <label htmlFor="closing date">Closing Date Of Reservation ?</label>
                <input type="date" name="reservation_closing_date" onChange={handleInputChange}
                    className="rounded" required />
            </div>

            <button type="submit" className="font-bold mx-auto text-lg bg-orange-600 rounded-sm text-white px-3 py-2 mt-3">Find Buddy</button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    onClose();
                }}
                className="absolute -top-2 -right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold text-2xl"
            >
                X
            </button>
        </form>
    )
}

export default FindBuddyForm;