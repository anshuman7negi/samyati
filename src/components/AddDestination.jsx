import { useState } from "react";
import { useDispatch } from "react-redux";
import { createDestination } from "../redux/destination";


const AddDestination = ({ onClose }) => {

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        destination_name: '',
        image: '',
        location: '',
        experience: '',
        youtube_video_link: '',
        total_cost: '',
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
        dispatch(createDestination(formData));

        setFormData(
            {
                destination_name: '',
                image: '',
                location: '',
                experience: '',
                youtube_video_link: '',
                total_cost: '',
            }
        );

        onClose();
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="z-20 fixed top-2/4 left-2/4 p-8 -translate-x-2/4 -translate-y-2/4 min-h-[90%] backdrop-blur-xl w-11/12 sm:w-5/6 lg:w-4/6 rounded-lg flex flex-col gap-4 bg-gray-500 shadow-lg bg-opacity-60"
        >
            <h1 className="font-bold text-lg text-center">Add Destination</h1>
            <div className="flex flex-col gap-2 font-bold font-lg">
                <label htmlFor="destination_name">Destination Name ?</label>
                <input type="text" name="destination_name" onChange={handleInputChange}
                    className="rounded" required />
            </div>
            <div className="flex gap-2 flex-col font-bold font-lg">
                <label htmlFor="image">Select Images From Your Devise ?</label>
                <input type="text" name="image" onChange={handleInputChange}
                    className="rounded" required />
            </div>
            <div className="flex flex-col gap-2 font-bold font-lg">
                <label htmlFor="location">Enter the Location ?</label>
                <input type="text" name="location" onChange={handleInputChange}
                    className="rounded" required />
            </div>
            <div className="flex flex-col gap-2 font-bold font-lg">
                <label htmlFor="experience">Experience about your journey ? (minimum 20 wordss)</label>
                <textarea name="experience" id="experience" cols="30" rows="3" onChange={handleInputChange} className="rounded" required ></textarea>
            </div>

            <div className="flex flex-col gap-2 font-bold font-lg">
                <label htmlFor="youtube_video_link">Youtube video Link ? (optional)</label>
                <input type="text" name="youtube_video_link" onChange={handleInputChange}
                    className="rounded" required />
            </div>

            <div className="flex flex-col gap-2 font-bold font-lg">
                <label htmlFor="total_cost">Total cost ? (optional)</label>
                <input type="number" name="total_cost" onChange={handleInputChange}
                    className="rounded" required />
            </div>

            <button type="submit" className="font-bold mx-auto text-lg bg-orange-600 rounded-sm text-white px-3 py-2 mt-3">Add Destination</button>
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

export default AddDestination;