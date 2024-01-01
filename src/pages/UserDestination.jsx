import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddDestination from "../components/AddDestination";
import { deleteDestination, getDestination } from "../redux/destination";


const UserDestination = () => {

    const dispatch = useDispatch();
    const { destinations, isLoading } = useSelector((store) => store.destination)
    const [showForm, setDisplayForm] = useState(false);

    useEffect(() => {
        dispatch(getDestination());
    }, [dispatch]);

    const trimword = (word) => word.split(' ').slice(0, 10).join(' ');

    const toogleForm = () => setDisplayForm(!showForm);

    if (isLoading) {
        return <h1>Loading....</h1>
    }

    if (destinations && destinations.length > 0) {
        return (
            <div className="flex flex-col gap-8 p-2 md:p-8 items-center min-h-screen bg-gradient-to-r from-[#ffdcd1] to-[#fdfbfa] z-0">
                <div
                    className="w-full flex justify-between md:w-4/6 border-2 rounded-lg items-center px-3 shadow-lg"
                    onClick={toogleForm}
                >
                    <p className="font-bold text-lg">Add your destination</p>
                    <p className="font-bold text-3xl">+</p>
                </div>
                {showForm && <AddDestination onClose={toogleForm} />}
                <div className="flex flex-col gap-8 w-full">
                    <p className="font-bold text-lg">Find your next trip</p>
                    <div className="flex flex-wrap justify-center gap-8">
                        {
                            destinations.map((destination) => (
                                <Link to={`/destination/${destination.id}`} key={destination.id}>
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
                                            {destination.experience && trimword(destination.experience)}
                                        </p>
                                        <p className="text-white font-bold w-full bg-green-600 text-center">
                                            Total cost : &#8377;{destination.total_cost}
                                        </p>
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

export default UserDestination;