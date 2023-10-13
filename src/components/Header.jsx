import { Image, Button } from "@nextui-org/react";
import { useState } from "react";
import { FiPlay, FiPause } from "react-icons/fi";
import {
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";
import Slider from "react-slick";

export default function Header() {
    const [paused, setPaused]       = useState(false);
    const [sliderRef, setSliderRef] = useState(null);
    const handlePause = () => {
        if (!paused) {
            sliderRef?.slickPause();
            setPaused(true);
        }
        if (paused) {
            sliderRef?.slickPlay();
            setPaused(false);
        }
    };

    return (
        <>
            <Slider
                ref            = {setSliderRef}
                autoplay       = {true}
                autoplaySpeed  = {8000}
                arrows         = {false}
                // fade
                waitForAnimate = {false}
                centerMode
                speed          = {3000}
                className      = "pt-6 pb-0 px-0 hover:cursor-pointer"
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
                <div className="px-2 w-full rounded-3xl h-full my-0 select-none	">
                    <Image
                        removeWrapper
                        alt       = "carousel banner"
                        src       = "src/assets/slide0.png"
                        draggable = "false"
                    />
                </div>
                <div className="px-2 w-full rounded-3xl h-full my-0 select-none	">
                    <Image
                        removeWrapper
                        alt       = "carousel banner"
                        src       = "src/assets/slide1.png"
                        draggable = "false"
                    />
                </div>
                <div className="px-2 w-full rounded-3xl h-full my-0 select-none	">
                    <Image
                        removeWrapper
                        alt       = "carousel banner"
                        src       = "src/assets/slide2.png"
                        draggable = "false"
                    />
                </div>
                <div className="px-2 w-full rounded-3xl h-full my-0 select-none	">
                    <Image
                        removeWrapper
                        alt       = "carousel banner"
                        src       = "src/assets/slide3.png"
                        draggable = "false"
                    />
                </div>
            </Slider>
            <div className="flex w-full justify-center">
                <Button
									isIconOnly
									onClick   = {sliderRef?.slickPrev}
									variant   = "light"
									size      = "sm"
									className = "mb-8 mt-2 lg:mt-0 dark:text-neutral-300 light:text-foreground text-xl md:text-base"
                >
                    <FaChevronLeft />
                </Button>
                <Button
                  isIconOnly
                  onPress   = {handlePause}
                  variant   = "light"
                  size      = "sm"
                  className = "ml-4 md:ml-2 mr-2 md:mr-0 mb-8 mt-2 lg:mt-0 dark:text-neutral-300 light:text-foreground text-xl md:text-base"
                >
                    {paused ? <FiPlay /> : <FiPause />}
                </Button>
                <Button
									isIconOnly
                  onClick   = {sliderRef?.slickNext}
                  variant   = "light"
                  size      = "sm"
                  className = "ml-2 mb-8 mt-2 lg:mt-0 dark:text-neutral-300 light:text-foreground text-xl md:text-base"
                >
                    <FaChevronRight />
                </Button>
            </div>
        </>
    );
}

{
    /* <Card className="w-full h-[50dvh] col-span-12 sm:col-span-7 relative">
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
</Card> */
}
