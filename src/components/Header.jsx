import { Card, CardHeader, Image } from "@nextui-org/react";
export default function Header() {
    return (
        <>
            <Card
                isFooterBlurred
                className="w-full h-[40dvh] col-span-12 sm:col-span-7"
            >
                <CardHeader className="absolute z-10 top-20 flex-col justify-center">
                    <h4 className="text-white font-medium text-6xl">
                        Vinyl Countdown
                    </h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="vinyl record player"
                    className="z-0 w-full h-full object-cover"
                    src="src/assets/vinylbg.jpg"
                />
            </Card>
        </>
    );
}