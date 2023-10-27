import axios from "axios";
//const backend = "http://localhost:24601"; //! Temp
const backend = import.meta.env.VITE_BACKEND_URL_DEPLOY; //! Uncomment

//User functionality
const signInUser = async (form) => {
  try {
    if (!form.email || !form.password)
      throw new Error(alert("Please enter a valid email and password!"));
    const userData = await axios.get(
      `http://localhost:24601/users?email=${form.email}&password=${form.password}`
    );
    console.log(userData.data);
    return userData.data;
  } catch (error) {
    console.error(error);
  }
};

const makeNewUser = (newUser) => {
  axios
    .post("http://localhost:24601/users", {
      first_name: newUser.firstName,
      last_name: newUser.lastName,
      email: newUser.email,
      password: newUser.password,
      profile_pic: newUser.profilePic,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const editUser = async (userId, userInfo) => {
  try {
    const userData = await axios.patch(
      `http://localhost:24601/users/${userId}`,
      {
        first_name: userInfo.firstName,
        last_name: userInfo.lastName,
        email: userInfo.email,
        password: userInfo.password,
        profile_pic: userInfo.profilePic,
      }
    );
    return userData.data;
  } catch (error) {
    console.error(error);
  }
};

const addToWishlist = (userId, albumId) => {
  axios
    .post(`http://localhost:24601/wishlist/${userId}/${albumId}`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const removeFromWishlist = (userId, albumId) => {
  axios
    .delete(`http://localhost:24601/wishlist/${userId}/${albumId}`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

//Album functionality
const getAllAlbums = async () => {
	const { data } = await axios
		.get(`${backend}/albums`);
	return data;
};

const getSingleAlbum = async (id) => {
  try {    
    if (!+id) throw new Error(`err`);
    const { data } = await axios
      .get(`${backend}/albums/${id}`);
    return data;
  } catch (error) {
    return ("🛑🐰 Ack! An error! ", error);
  }
};

/**
 * Function for getting relevant recommendations based on the genre of the album with a specific ID.
 * @param id Provides the album ID to base recommendations on.
 * Can only be a number
 */
const getRecs = async (id) => {
try {
    const { data } = await axios
      .get(`${backend}/albums/${id}/recommendations`);
    console.log("Recommendation matches: ", data.length);
    return data;
} catch (error) {
  return ("🛑🐰 Ack! An error! ", error);
}
};

// const getRecs = async (genre, id) => {
// 	console.log("Hello! :) ", genre.genre);
// 	console.log("Hello! :o ", id);

// 	const { data } = await axios
// 	.get(`${backend}/albums`);

// 	// const albums = await getAllAlbums();
// 	const s = await data
// 	.filter((album) => album.genre == genre.genre)
// 	.slice(0, 12);
// 	console.log(data);
// 	return s;
// };

export { signInUser, makeNewUser, editUser, addToWishlist, removeFromWishlist, getAllAlbums, getSingleAlbum, getRecs };
