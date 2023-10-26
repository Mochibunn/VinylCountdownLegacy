import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../Contexts";
import { FiPlus, FiShoppingCart } from "react-icons/fi";
import {
  Card,
  CardBody,
  Image,
  Divider,
  Textarea,
  Button,
} from "@nextui-org/react";
import AlbumCarousel from "../components/AlbumCarousel";
import LoadingPage from "./LoadingPage";
import { Spotify } from "react-spotify-embed";
// import { getSingleAlbum } from "../lib/contentfulClient";
import { getSingleAlbum } from "../lib/dbClient";
// import { addToWishlist } from "../lib/contentfulMngClient";
import Tilt from "react-parallax-tilt";
import RemoveWishBtn from "../components/RemoveWishBtn";
import { GenreMap } from "../components/GenreMap";

export default function AlbumPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [inWishlist, setInWishlist] = useState(false);
  const [singleAlbum, setSingleAlbum] = useState();
  const [value, setValue] = useState("");
  const { albumId } = useParams();
  const { user, setUser } = useContext(UserContext);

  // console.log(singleAlbum);
  // console.log(user[0]);
	useEffect(() => {
		getSingleAlbum(albumId)
			.then((albumData) => {
				setSingleAlbum(albumData);
				(!albumData.comment) ? "" :
				setValue(albumData.comment);
				setIsLoaded(true);
			})
	}, []);

  // const handleAddToWishlist = () => {
  //   if (!user) return;
  //   const updatedWishlist = [...(user[0].wishlist || []), singleAlbum];
  //   // addToWishlist(user[0].sys.id, albumId);
  //   setUser((prev) =>
  //     prev.map((user) => ({
  //       ...user,
  //       wishlist: updatedWishlist,
  //     }))
  //   );
  //   // setInWishlist(true);
  // };
  // singleAlbum && console.log(singleAlbum.sys.id);
  useEffect(() => {
    //imported now :)
    // setIsLoaded(false);
    // getSingleAlbum(albumId)
    //     .then((albumData) => {
    //         setSingleAlbum(albumData);
    //         setValue(albumData.fields.comment);
    //         setIsLoaded(true);
    //     })
    //     .catch((error) => console.error(error));
    // window.scrollTo(0, 0);
  }, [albumId]);

  //check if album is in wishlist, and update state
  // useEffect(() => {
  //   if (!user || !user[0].fields.wishlist) return;
  //   const testArray = user[0].fields.wishlist.filter(
  //     (album) => album.sys.id === albumId
  //   );
  //   console.log("testarray", testArray);
  //   const wishlistStatus = testArray.length;
  //   console.log("wishliststatus", wishlistStatus);
  //   setInWishlist(wishlistStatus);
  // }, [user, albumId]);

  return (
    <>
      {!isLoaded ? (
        <LoadingPage />
      ) : (
        <div className="m-5 sm:m-10 md:m-[5em] flex flex-col sm:flex-row justify-center w-100">
          <Card
            shadow="sm"
            isPressable
            disableRipple
            onPress={() => console.log("item pressed")}
            className="mb-0 h-full sm:sticky sm:top-20 overflow-visible shadow-none bg-transparent"
          >
            <Tilt
              glareEnable
              transitionSpeed={1000}
              glareBorderRadius="12px"
              glarePosition="top"
              glareMaxOpacity={0.3}
              glareReverse
              className="rounded-xl overflow-hidden"
            >
              <div>
                <CardBody className="p-0 shadow-2xl rounded-xl">
                  <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={singleAlbum.title}
                    className="sm:max-h-[250px] md:max-h-[300px] lg:max-h-[450px] xl:max-h-[600px] rounded-xl -z-1"
                    src={singleAlbum.img_url}
                  />
                </CardBody>
              </div>
            </Tilt>
          </Card>
          <div className="sm:ml-5 md:ml-8 lg:ml-12 sm:mt-12 w-full sm:w-1/2">
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold">
              {singleAlbum.title}
            </span>
            <h2 className="text-3xl sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2">
              {singleAlbum.artist}
            </h2>
            <h2 className="text-xl font-semibold mt-1">
              {singleAlbum.year}
            </h2>
            <h2 className="text-l">
              <i className="font-normal">{singleAlbum.format}</i>
            </h2>
            {GenreMap(singleAlbum.genre)}
            <h2 className="text-xl mt-3">
              Sleeve:{" "}
              <b className="font-semibold">{singleAlbum.sleeve}</b>
            </h2>
            <h2 className="text-xl">
              Media: <b className="font-semibold">{singleAlbum.media}</b>
            </h2>
            <h1 className="text-4xl lg:text-6xl font-bold mt-2 mb-4">
              ${singleAlbum.price}
            </h1>

            <div className="w-full max-w-full sm:max-w-xs md:max-w-full">
              <Textarea
                isReadOnly
                label="Additional notes"
                variant="bordered"
                labelPlacement="inside"
                placeholder=""
                // defaultValue={singleAlbum.fields.comment}
                value={value}
              />
              <div className="my-4 flex gap-4 justify-center">
                <Button
                  color="warning"
                  variant="shadow"
                  endContent={<FiShoppingCart />}
                  className="w-full h-14 text-lg font-semibold active:bg-default-400 active:shadow-default-300 active:text-white "
                >
                  Add to cart
                </Button>
                {inWishlist ? (
                  <RemoveWishBtn
                    id={singleAlbum.id}
                    setInWishlist={setInWishlist}
                  />
                ) : (
                  <Button
                    color="warning"
                    variant="shadow"
                    startContent={<FiPlus />}
                    className="w-full h-14 text-lg font-semibold"
                    // onClick={handleAddToWishlist}
                  >
                    Add to Wishlist
                  </Button>
                )}
              </div>
              <Divider className="my-4" />
              <div
                className="rounded-xl overflow-hidden"
                aria-label="component wrapper"
              >
                {/* w/o this div, the Spotify player gets ugly white corners in dark mode */}
                <Spotify
                  link={singleAlbum.spotify_url}
                  className="w-full h-[600px] shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <AlbumCarousel singleAlbum={singleAlbum} albumId={albumId} />
    </>
  );
}
