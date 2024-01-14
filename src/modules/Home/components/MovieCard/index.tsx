import React from "react";
import { Movie } from "../Trending/listMovies";
import { ClockCircleOutlined } from "@ant-design/icons";

export default function MovieCard({ movie }: { movie: Movie }) {
  const { src, title, main, runtime } = movie;
  return (
    <div className="card">
      <img src={src} alt="" className="w-full" />
      <div className="p-4 text-white">
        <h4>{title}</h4>
        <p>{main}</p>
      </div>
      <div className="flex justify-center items-center bg-cyan-50 p-2 rounded-md absolute top-2 left-2 min-w-[25%]">
        <ClockCircleOutlined />
        <p>{runtime}</p>
      </div>
    </div>
  );
}
