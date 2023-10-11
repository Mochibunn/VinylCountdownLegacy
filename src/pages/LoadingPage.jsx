import { Progress } from "@nextui-org/react";

export default function LoadingPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen">
            <Progress
                size="sm"
                isIndeterminate
                aria-label="Loading..."
                className="max-w-md"
            />
        </div>
    );
}
