import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteDestination } from "../redux/destination";


const DestinationDetail = () => {
    const { destinations} = useSelector((store) => store.destination)
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const singleDestination = destinations&& id && destinations.find((destination) => destination.id == id);

    const handleDelete = () => {
        dispatch(deleteDestination(id)).then(() => {
            navigate('/destinations');
        });
    }


    if (!singleDestination) {
        return <h1>Loading...</h1>
    }
    return (
        <div className="flex flex-col p-3 pb-12 gap-8 min-h-screen items-center bg-gradient-to-r from-[#ffdcd1] to-[#fdfbfa]">
            <h1 className="font-bold text-3xl tracking-widest">{singleDestination.destination_name}</h1>
            <img src={singleDestination.image} alt="destination" className="max-h-[400px] sm:max-w-2/3 rounded-xl shadow-lg" />
            <ul>
                <li className="bg-purple-600 text-white text-lg px-4 py-2 rounded-3xl md:font-bold tracking-widest">
                    <a href={singleDestination.youtube_video_link} target="_blank" rel="noreferrer">
                        Youtube
                    </a>
                </li>
            </ul>
            <p className="font-bold text-lg w-5/6">Location : {singleDestination.location}</p>
            <p className="text-lg w-5/6">
                {singleDestination.experience}
            </p>
            {singleDestination.youtube_video_link &&
                <iframe src="https://www.youtube.com/embed/FffVuSwmDf4?si=b2k7VQKhqiLjeM9R" title="YouTube Video"
                    width="560"
                    height="315"
                    allowFullScreen ></iframe>
            }
            <button
                className="rounded-xl bg-red-600 font-bold text-white px-4 py-2"
                onClick={handleDelete}
            >
                Delete Destination
            </button>
        </div>
    )
}

export default DestinationDetail;