import axios from "axios";

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

export { signInUser, makeNewUser, addToWishlist, removeFromWishlist };
