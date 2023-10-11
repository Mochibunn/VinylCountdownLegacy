import { Card, CardHeader, Image } from "@nextui-org/react";
export default function Header() {
    return (
        <>
            <Card className="w-full h-[50dvh] col-span-12 sm:col-span-7 relative">
                <CardHeader className="absolute inset-0 flex-col justify-center">
                    <h4 className="text-white font-medium text-6xl mb-2">
                        Vinyl Countdown
                    </h4>
                    <p className="text-white/80 font-medium text-xl">
                        Where Vinyl Finds Its Home
                    </p>
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
