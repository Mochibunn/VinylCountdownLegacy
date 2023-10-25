// import { createClient } from "contentful-management";
import { useState, useContext, useMemo } from "react";
import { UserContext } from "../Contexts";
import { editUser } from "../lib/dbClient";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "@nextui-org/react";

const Settings = () => {
    const { user, setUser } = useContext(UserContext);
    const [form, setForm] = useState({
        firstName: user[0].first_name,
        lastName: user[0].last_name,
        email: user[0].email,
        password: user[0].password,
        profilePic: user[0].profile_pic,
    });

    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        editUser(user[0].id, form)
            .then((userData) => {
                console.log(userData);
                if (!userData)
                    return alert("Sorry, an error occurred while updating");
                userData && setUser([userData]);
                return alert("Profile successfully updated :)");
            })
            .catch((error) => console.error(error));
    };

    //email and  password validation
    const validateEmail = (value) =>
        value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const isInvalid = useMemo(() => {
        if (form.email === "") return false;

        return validateEmail(form.email) ? false : true;
    }, [form.email]);
    // console.log(form)
    //end validation section

    return (
        <div className="mt-[-1px] w-full min-h-screen flex items-center justify-center p-4">
            <form
                onSubmit={handleSubmit}
                autoComplete="off"
                className="flex flex-col items-center justify-between bg-base-300 pt-4 rounded overflow-hidden mx-auto my-0 w-2/3 sm:w-1/2 2xl:w-1/3 transition-all"
            >
                <h1 className="mt-2 mb-8 lg:mb-16 text-2xl font-semibold text-white">
                    Profile Settings
                </h1>
                <div className="flex flex-col items-center justify-around h-1/2 w-full text-white">
                    <Input
                        isRequired
                        type="text"
                        label="First Name"
                        labelPlacement="outside"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        className="w-full md:w-3/5 mb-1 sm:mb-2 lg:mb-4 p-2"
                    />
                    <Input
                        isRequired
                        type="text"
                        label="Last Name"
                        labelPlacement="outside"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        className="w-full md:w-3/5 mb-1 sm:mb-2 lg:mb-4 p-2 "
                    />
                    <Input
                        isRequired
                        type="text"
                        label="E-mail"
                        labelPlacement="outside"
                        name="email"
                        isInvalid={!form.email ? true : isInvalid}
                        color={isInvalid ? "danger" : "success"}
                        errorMessage={isInvalid && "Please enter a valid email"}
                        value={form.email}
                        onChange={handleChange}
                        className="w-full md:w-3/5 mb-1 sm:mb-2 lg:mb-4 p-2"
                    />
                    <Input
                        isRequired
                        type="password"
                        label="Password"
                        labelPlacement="outside"
                        description="Password is not secure, do not use a password used on other sites."
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full md:w-3/5 mb-1 sm:mb-2 lg:mb-4 p-2"
                    />
                    <Input
                        type="text"
                        label="Profile Pic"
                        description="Please use an image URL"
                        labelPlacement="outside"
                        name="profilePic"
                        value={form.profilePic}
                        onChange={handleChange}
                        className="w-full md:w-3/5 mb-1 sm:mb-2 lg:mb-4 p-2"
                    />
                </div>
                <br />
                <div className="flex w-full justify-center">
                    <Button
                        type="submit"
                        className="w-1/2 bg-success hover:bg-success-content hover:border-success-content rounded-none text-white font-normal text-lg py-4 transition-none uppercase"
                    >
                        Update Profile
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Settings;
