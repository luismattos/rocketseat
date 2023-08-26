import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { MoviePreview } from "../pages/moviePreview";
import { NewMovie } from "../pages/newMovie";
import { Profile } from "../pages/profile";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<MoviePreview />} />
      <Route path="/new" element={<NewMovie />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
