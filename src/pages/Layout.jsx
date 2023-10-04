//wrote in but commented out components for Nav and Footer-will need to be tested once they are added.

import { Outlet } from "react-router-dom";
//import TheNav from "../components/TheNav";
//import TheFooter from "../components/TheFooter";

export default function LandingPage() {
    return (
        <>
            {/* <TheNav /> */}
            <Outlet />
            {/* <TheFooter />*/}
        </>
    );
}
