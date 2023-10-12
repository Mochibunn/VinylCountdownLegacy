import { Card, CardHeader, Image } from "@nextui-org/react";
import Slider from "react-slick";
export default function Header() {
	return (
			<Slider
				autoplay
				autoplaySpeed={8000}
				arrows={false}
				// fade
				centerMode
				pauseOnHover
				speed={2000}
				className="py-6 px-0"
			>
				<Image
					removeWrapper
					alt="carousel banner"
					className="px-2 w-full rounded-3xl h-full object-cover max-h-[60dvh]"
					src="src/assets/slide1.png"
				/>
				<Image
					removeWrapper
					alt="carousel banner"
					className="px-2 w-full rounded-3xl h-full object-cover max-h-[60dvh]"
					src="src/assets/slide2.png"
				/>
				<Image
					removeWrapper
					alt="carousel banner"
					className="px-2 w-full rounded-3xl h-full object-cover max-h-[60dvh]"
					src="src/assets/slide3.png"
				/>
			</Slider>
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