import { useState, useEffect } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { getRecs } from "../lib/dbClient";
// import { getRecs } from "../lib/contentfulClient";
import AlbumCard from "./AlbumCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { getAllAlbums } from "../lib/dbClient";

export default function AlbumCarousel({ singleAlbum, albumId }) {
  const [sliderRef, setSliderRef] = useState(null);
  const [albumRecs, setAlbumRecs] = useState();
  // const sliced = albumRecs.slice(0, 12);
  // useEffect(() => {
  // 	getAllAlbums()
  // 			.then((albumData) => {
  // 					// console.log("singleAlbum", singleAlbum.fields.genre);
  // 					console.log("arrivalsdata", albumData);
  // 					setAlbumRecs(albumData);
  // 			})
  // 			.catch((error) => console.error(error));
  // 	if (!singleAlbum) return;
  // 	getRecs(singleAlbum.fields.genre, albumId)
  // 			.then((albumData) => setAlbumRecs(albumData))
  // 			.catch((error) => console.error(error));
  // }, [singleAlbum, albumId]);

	
  useEffect(() => {
		getRecs(albumId)
		.then((recData) => {
			const gg = recData;
			console.log("👀🐰 Original result size: " , gg.length);
			const shuffle = () => {
				for (let i = gg.length - 1; i > 0; i--) {
					const j = Math.floor(Math.random() * (i + 1));
					const temp = gg[i];
					gg[i] = gg[j];
					gg[j] = temp;
				}
			}
			shuffle();
			console.info("👀🐰 Result shuffled")
			setAlbumRecs(recData.slice(0, 12));
			console.info("🟢🐰 Recommendations set!\n", recData.slice(0, 12));
		})
		.catch((error) => console.error("🛑🐰 Uh oh, error! " + error));
  }, [albumId]);
	

  // useEffect(() => {
  // 	try {
  // 		const recWrap = async () => {
  // 			const recs = await getRecs(singleAlbum, albumId);
  // 		}
  // 		recWrap();
  // 	} catch (error) {
  // 		console.log("🛑🐰 Error! ", error);
  // 	}
  // 	}, [singleAlbum, albumId]);

  // useEffect(() => {
  // 	getAllAlbums()
  // 		.then((albumData) => {
  // 			setNewArrivals(albumData);
  // 			console.info("👀🐰 Client received all album data");
  // 		})
  // 		.catch((error) => console.log("🛑🐰 Uh oh, error!" + error));
  // }, []);

  const sliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    dots: false,
    arrows: false,
    lazyLoad: "ondemand",
    speed: 2000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-11/12 mx-auto">
      <h4 className="text-2xl font-bold">You may also like..</h4>
      <div className=" flex justify-between relative z-10 top-48">
        <button onClick={sliderRef?.slickPrev} className="">
          <FaChevronLeft />
        </button>
        <button onClick={sliderRef?.slickNext} className="">
          <FaChevronRight />
        </button>
      </div>
      <div className="px-10">
        <Slider
          className="pt-6 flex justify-center"
          ref={setSliderRef}
          {...sliderSettings}
        >
          {albumRecs &&
            albumRecs.map((rec) => (
              <AlbumCard
                key={crypto.randomUUID()}
                {...rec}
                imgUrl={rec.img_url}
                // id={rec.id}
              />
            ))}
        </Slider>
      </div>
    </div>
  );
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
