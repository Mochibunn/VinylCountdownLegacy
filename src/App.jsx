import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Layout from "./pages/Layout";
import LandingPage from "./pages/LandingPage";
import AlbumPage from "./pages/AlbumPage";
import SearchPage from "./pages/SearchPage";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Wishlist from "./pages/Wishlist";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

function App() {
    const [searchValue, setSearchValue] = useState("");

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Layout
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                    />
                }
            >
                <Route index element={<LandingPage />} />
                <Route path="album/:albumId" element={<AlbumPage />} />
                <Route
                    path="search"
                    element={<SearchPage searchValue={searchValue} />}
                />
                <Route path="signin" element={<SignIn />} />
                <Route path="register" element={<Register />} />
                <Route path="wishlist" element={<Wishlist />} />
                <Route path="settings" element={<Settings />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
