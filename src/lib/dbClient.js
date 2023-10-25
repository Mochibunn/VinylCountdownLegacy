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

export { signInUser, makeNewUser, editUser, addToWishlist, removeFromWishlist };
