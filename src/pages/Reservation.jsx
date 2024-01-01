import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { deleteBuddies, getBuddies } from "../redux/findBuddy";

const Reservation = () => {
    const { message } = useSelector((store) =>  store.buddy)
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const singleBuddy = message && id && message.find((buddy) => buddy.id == id);

    const handleDelete = () => {
        dispatch(deleteBuddies(id)).then(() => {
            navigate('/buddy');
        });
    }


    if(!singleBuddy) {
        return <h1>Loading...</h1>
    }
    return(
        <div className="flex flex-col p-3 pb-8 gap-8 min-h-screen items-center bg-gradient-to-r from-[#ffdcd1] to-[#fdfbfa]">
            <h1 className="font-bold text-3xl">Reserve your seat</h1>
            <img src={singleBuddy.image} alt="destination" className="max-h-[400px] sm:max-w-2/3 rounded-xl shadow-lg" />
            <table className="table-fixed w-full border-separate font-bold border-spacing-2">
                <tbody>
                    <tr className="border-b bg-slate-200">
                        <td className="py-2 pl-2">Name of destionation</td>
                        <td className="py-2 pl-2">{singleBuddy.username}</td>
                    </tr>
                    <tr className="border-b bg-slate-400">
                        <td className="py-2 pl-2">Description</td>
                        <td className="py-2 pl-2">{singleBuddy.description}</td>
                    </tr>
                    <tr className="border-b bg-slate-200">
                        <td className="py-2 pl-2">Location</td>
                        <td className="py-2 pl-2">{singleBuddy.location}</td>
                    </tr>
                    <tr className="border-b bg-slate-400">
                        <td className="py-2 pl-2">Reservation closing date</td>
                        <td className="py-2 pl-2">{singleBuddy.reservation_closing_date}</td>
                    </tr>
                </tbody>
            </table>
            <div className="flex gap-4 font-bold text-lg text-white">
                <button 
                   className="bg-red-500 px-4 py-2 rounded-sm"
                   onClick={handleDelete}
                >Delete</button>
                <button className=" bg-green-500 px-4 py-2 rounded-sm">Reserve</button>
            </div>
        </div>
    )
}

export default Reservation