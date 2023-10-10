import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Checkbox,
    Input,
    Link,
} from "@nextui-org/react";
import { MailIcon } from "../assets/MailIcon.jsx";
import { LockIcon } from "../assets/LockIcon.jsx";
import { getUser } from "../lib/contentfulClient";
import { SignInModalContext, UserContext } from "../Contexts";
import { useState, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";

export default function SignInModal() {
    const { isOpen, onOpen, onClose, onOpenChange } =
        useContext(SignInModalContext);
    const [backdrop, setBackdrop] = useState("blur");

    backdrop;
    const handleOpen = (backdrop) => {
        setBackdrop(backdrop);
        onOpen();
    };

    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const { setUser } = useContext(UserContext);

    const navigate = useNavigate();

    //email and  password validation
    const validateEmail = (value) =>
        value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const isInvalid = useMemo(() => {
        if (form.email === "") return false;

        return validateEmail(form.email) ? false : true;
    }, [form.email]);
    // console.log(form)
    //end validation section

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        if (!form.email || !form.password)
            return alert("Please enter a valid email and password!");
        //imported now-expects object as argument
        getUser(form)
            .then((userData) => {
                let test = userData;
                if (userData.length) {
                    setUser(userData);
                } else {
                    setUser(false);
                }
                return test;
                // userData.length ? setUser(userData) : setUser(false);
            })
            .then((test) => {
                if (!test.length) return alert("Invalid email or password!");
                setForm({
                    email: "",
                    password: "",
                });
                navigate("/");
                onOpenChange();
            })
            .catch((error) => console.error(error));
    };

    const isDarkMode = JSON.parse(localStorage.getItem("isDark"));

    return (
        <>
            <div onClick={() => handleOpen(`blur`)}>Sign In</div>
            <Modal
                isOpen={isOpen}
                backdrop="blur"
                onOpenChange={onOpenChange}
                placement="top-center"
                className={isDarkMode && "dark text-foreground"}
            >
                <ModalContent>
                    {() => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Sign In
                            </ModalHeader>
                            <ModalBody>
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        handleSubmit();
                                    }}
                                    autoComplete="off"
                                >
                                    <Input
                                        isRequired
                                        autoFocus
                                        endContent={
                                            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        }
                                        placeholder="Enter your email"
                                        label="Email"
                                        name="email"
                                        type="email"
                                        variant="bordered"
                                        isInvalid={
                                            !form.email ? true : isInvalid
                                        }
                                        color={isInvalid ? "danger" : "success"}
                                        errorMessage={
                                            isInvalid &&
                                            "Please enter a valid email"
                                        }
                                        value={form.email}
                                        onChange={handleChange}
                                    />
                                    <Input
                                        isRequired
                                        endContent={
                                            <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        }
                                        placeholder="Enter your password"
                                        label="Password"
                                        name="password"
                                        type="password"
                                        variant="bordered"
                                        value={form.password}
                                        onChange={handleChange}
                                    />
                                    <div className="flex py-2 px-1 justify-between">
                                        <Checkbox
                                            classNames={{
                                                label: "text-small",
                                            }}
                                        >
                                            Remember me
                                        </Checkbox>
                                        <Link
                                            color="primary"
                                            href="#"
                                            size="sm"
                                        >
                                            Forgot password?
                                        </Link>
                                    </div>
                                </form>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="danger"
                                    variant="flat"
                                    onPress={onClose}
                                >
                                    Close
                                </Button>
                                <Button color="primary" onPress={handleSubmit}>
                                    Sign in
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
