import { useState, useEffect } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { getNewArrivals } from "../lib/contentfulClient";
import AlbumCard from "./AlbumCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AlbumCarousel() {
    const [sliderRef, setSliderRef] = useState(null);
    const [albumRecs, setAlbumRecs] = useState();
    useEffect(() => {
        getNewArrivals()
            .then((albumData) => setAlbumRecs(albumData))
            .catch((error) => console.error(error));
    }, []);

    const sliderSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div className="w-11/12 p-4 mx-auto">
            <h4 className="text-2xl font-bold">You may also like...</h4>
            <div className="w-full flex justify-between relative z-10 top-48 right-4">
                <button onClick={sliderRef?.slickPrev}>
                    <FaChevronLeft />
                </button>
                <button onClick={sliderRef?.slickNext}>
                    <FaChevronRight />
                </button>
            </div>
            <Slider className="px-5" ref={setSliderRef} {...sliderSettings}>
                {albumRecs &&
                    albumRecs.map((rec) => (
                        <AlbumCard
                            key={crypto.randomUUID()}
                            {...rec.fields}
                            id={rec.sys.id}
                        />
                        // <div key={index} className="card">
                        //     <img
                        //         src={card.fields.imgUrl}
                        //         alt={card.fields.title}
                        //         className="card-image"
                        //     />
                        //     <div className="text-info">
                        //         <div className="card-header">
                        //             <h2>{card.fields.title}</h2>
                        //             <span>{card.fields.price}</span>
                        //         </div>
                        //         <p>{card.description}</p>
                        //         <ul>
                        //         {card.features.map((feature, index) => (
                        //             <li key={index}>{feature}</li>
                        //         ))}
                        //     </ul>
                        //     </div>
                        //     <button>Buy Now</button>
                        // </div>
                    ))}
            </Slider>
        </div>
    );
}
