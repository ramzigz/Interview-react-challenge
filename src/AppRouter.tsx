import React from "react";
import {
    Routes,
    Route,
    BrowserRouter,

} from "react-router-dom";
import Albums from "./screens/Albums";
import AlbumDetails from "./screens/AlbumDetails";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Albums />} />
                <Route path="/albums" element={<Albums />} />
                <Route path="/albums/:albumId" element={<AlbumDetails />} />
            </Routes>
        </BrowserRouter>
    );
}