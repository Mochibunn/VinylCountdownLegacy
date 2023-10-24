import axios from "axios";

const signInUser = async (form) => {
    try {
        if (!form.email || !form.password)
            throw new Error(alert("Please enter a valid email and password!"));
        const userData = await axios.get(
            `//localhost:24601/users?email=${form.email}&password=${form.password}`
        );
        console.log(userData.data);
        return userData.data;
    } catch (error) {
        console.error(error);
    }
};

export { signInUser };
