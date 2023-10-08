import { Route, Routes } from "react-router-dom";

import Layout from "./pages/Layout";
import LandingPage from "./pages/LandingPage";
import AlbumPage from "./pages/AlbumPage";
import SearchPage from "./pages/SearchPage";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<LandingPage />} />
                <Route path="album/:albumId" element={<AlbumPage />} />
                <Route path="search" element={<SearchPage />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="register" element={<Register />} />

                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
