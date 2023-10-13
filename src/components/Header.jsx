import { Image, Button } from "@nextui-org/react";
import { useState } from "react";
import { FiPlay, FiSquare } from "react-icons/fi";
import Slider from "react-slick";

export default function Header() {
	const [pause, setPause] = useState(true);
	const handlePause = () => {
		setPause(false) //! Temporary solution
		};

	return (
		<>
			<Slider
				autoplay={pause}
				autoplaySpeed={10000}
				arrows={false}
				// fade
				waitForAnimate={false}
				centerMode
				speed={2000}
				className="pt-6 pb-1 px-0"
			>
				{/* <div className="px-2">

				<Card className="h-full col-span-12 sm:col-span-7 relative">
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
					src="src/assets/slide0.png"
					/>
				</Card>
					</div> */}
				<div className="px-2 w-full rounded-3xl h-full my-0">
				<Image
					removeWrapper
					alt="carousel banner"
					src="src/assets/slide0.png"
					/>
				</div>
				<div className="px-2 w-full rounded-3xl h-full my-0">
				<Image
					removeWrapper
					alt="carousel banner"
					src="src/assets/slide1.png"
					/>
				</div>
				<div className="px-2 w-full rounded-3xl h-full my-0">
				<Image
					removeWrapper
					alt="carousel banner"
					src="src/assets/slide2.png"
					/>
				</div>
				<div className="px-2 w-full rounded-3xl h-full my-0">
				<Image
					removeWrapper
					alt="carousel banner"
					src="src/assets/slide3.png"
					/>
				</div>
			</Slider>
			<Button
				isIconOnly
				onPress={handlePause}
				size="sm"
				className="ml-4 mb-8"
			>
				{pause ? <FiPlay/>: <FiSquare/>}</Button>
			</>
	);
}


{/* <Card className="w-full h-[50dvh] col-span-12 sm:col-span-7 relative">
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
</Card> */}