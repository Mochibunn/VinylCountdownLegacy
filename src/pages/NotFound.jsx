import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <main className="flex flex-col items-center h-screen -mt-20 -mb-14">
            <h1 className="text-7xl mt-96 mb-10">404</h1>
            <p className="text-xl">
                Whoah, you`ve gone too far out. You won`t find any music here
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
