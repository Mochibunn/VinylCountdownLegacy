import { createClient } from "contentful-management";
import { useState, useContext } from "react";
import { UserContext } from "../Contexts";
import { client } from "../lib/contentfulClient";

const mngClient = createClient({
    accessToken: "CFPAT-9FIovKgJafb_y5dqoSK0a3qRLNPaXZgH0pCZP6T7Ne4",
});

const Register = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        profilePic: "",
    });
    const { setUser } = useContext(UserContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const makeNewUser = () => {
        mngClient
            .getSpace("mzz74ba5zfwb")
            .then((space) => space.getEnvironment("master"))
            .then((environment) =>
                environment.createEntryWithId("user", crypto.randomUUID(), {
                    fields: {
                        firstName: {
                            "en-US": form.firstName,
                        },
                        lastName: {
                            "en-US": form.lastName,
                        },
                        email: {
                            "en-US": form.email,
                        },
                        password: {
                            "en-US": form.password,
                        },
                        profilePic: {
                            "en-US": form.profilePic,
                        },
                    },
                })
            )
            .then((entry) => entry.publish())
            .catch(console.error);
    };

    const handleSubmit = () => {
        const getUser = async () => {
            try {
                const getUserEntry = await client.getEntries({
                    content_type: "user",
                    "fields.email": `${form.email}`,
                    "fields.password": `${form.password}`,
                });
                return getUserEntry.items;
            } catch (error) {
                console.error(error);
            }
        };
        makeNewUser();
        getUser()
            .then((userData) => setUser(userData))
            .catch((error) => console.error(error));
        // navigate("/");
    };

    return (
        <div className="mt-[-1px] w-full h-screen flex items-center justify-center">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}
                autoComplete="off"
                className="flex flex-col items-center justify-between bg-base-300 pt-4 rounded overflow-hidden mx-auto my-0 w-2/3 sm:w-1/2 2xl:w-1/3 transition-all"
            >
                <h1 className="mt-2 mb-8 lg:mb-16 text-2xl font-semibold text-white">
                    Register
                </h1>
                <div className="flex flex-col items-center justify-around h-1/2 w-full text-white">
                    <input
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        className="w-3/5 mb-2 sm:mb-4 lg:mb-8 p-2 outline-none border-b border-transparent focus:border-slate-100 bg-slate-500 rounded transition-all"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        className="w-3/5 mb-2 sm:mb-4 lg:mb-8 p-2 outline-none border-b border-transparent focus:border-slate-100 bg-slate-500 rounded transition-all"
                    />
                    <input
                        type="text"
                        placeholder="E-mail"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-3/5 mb-2 sm:mb-4 lg:mb-8 p-2 outline-none border-b border-transparent focus:border-slate-100 bg-slate-500 rounded transition-all"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        className="w-3/5 mb-2 sm:mb-4 lg:mb-8 p-2 outline-none border-b border-transparent focus:border-slate-100 bg-slate-500 rounded transition-all"
                    />
                    <input
                        type="text"
                        placeholder="Please use an image URL..."
                        name="profilePic"
                        value={form.profilePic}
                        onChange={handleChange}
                        className="w-3/5 mb-2 sm:mb-4 lg:mb-8 p-2 outline-none border-b border-transparent focus:border-slate-100 bg-slate-500 rounded transition-all"
                    />
                </div>
                <br />
                <div className="flex w-full">
                    <button className="w-1/2 bg-accent hover:bg-info-content hover:border-info-content rounded-none text-white font-normal text-lg p-4 transition-none uppercase">
                        Sign In
                    </button>
                    <button
                        type="submit"
                        className="w-1/2 bg-success hover:bg-success-content hover:border-success-content rounded-none text-white font-normal text-lg py-4 transition-none uppercase"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;
