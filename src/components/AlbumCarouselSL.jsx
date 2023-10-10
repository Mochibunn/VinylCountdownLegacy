import { useState, useEffect } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { getNewArrivals } from "../lib/contentfulClient";
import AlbumCard from "./AlbumCard";
import SlCarousel from '@shoelace-style/shoelace/dist/react/carousel';
import SlCarouselItem from '@shoelace-style/shoelace/dist/react/carousel-item';

export default function AlbumCarouselSL() {
  // const [sliderRef, setSliderRef] = useState(null);
  const [albumRecs, setAlbumRecs] = useState();
  useEffect(() => {
      getNewArrivals()
        .then((albumData) => setAlbumRecs(albumData))
        .catch((error) => console.error(error));
    }, []);

    return(
        <SlCarousel navigation pagination slidesPerPage={4} slidesPerMove={2}>
          <SlCarouselItem>
            {albumRecs &&
              albumRecs.map((rec) => {
                  <AlbumCard
                    key={crypto.randomUUID()}
                    {...rec.fields}
                    id={rec.sys.id}
                    />})}
                    </SlCarouselItem>
        </SlCarousel>
    )

    // return (
    //     <div className="w-11/12 mx-auto">
    //         <h4 className="text-2xl font-bold">You may also like...</h4>
    //         <div className=" flex justify-between relative z-10 top-48">
    //             <button onClick={sliderRef?.slickPrev} className="">
    //                 <FaChevronLeft />
    //             </button>
    //             <button onClick={sliderRef?.slickNext} className="">
    //                 <FaChevronRight />
    //             </button>
    //         </div>
    //         <div className="px-10">
    //         <Slider className="pt-6 flex justify-center" ref={setSliderRef} {...sliderSettings}>
    //             {albumRecs &&
    //                 albumRecs.map((rec) => (
    //                     <AlbumCard
    //                     key={crypto.randomUUID()}
    //                     {...rec.fields}
    //                     id={rec.sys.id}
    //                     />))}
    //         </Slider>
    //         </div>
    //     </div>
    // );
}

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