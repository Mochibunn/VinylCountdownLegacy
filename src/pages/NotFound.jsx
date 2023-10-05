import { useNavigate } from "react-router-dom";
import { notFoundQuotes } from "../assets/NotFoundQuotes";

export default function NotFound() {
    const navigate = useNavigate();
    const quoteArr = notFoundQuotes;
    
    const randomQuote = () => {
        const itm = Math.floor(Math.random() * quoteArr.length);
        return quoteArr[itm];
    };

    return (
        <main className="flex flex-col items-center h-screen -mt-20 -mb-14">
            <h1 className="text-7xl mt-96 mb-10">404</h1>
            <p className="text-xl">
                {randomQuote()}
            </p>
            <button
                onClick={() => navigate(-1)}
                className="btn btn-accent mt-10"
            >
                Go back
            </button>
        </main>
    );
}