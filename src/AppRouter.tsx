import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    BrowserRouter,

} from "react-router-dom";
import Albums from "./components/Albums";
import AlbumDetails from "./components/AlbumDetails";

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