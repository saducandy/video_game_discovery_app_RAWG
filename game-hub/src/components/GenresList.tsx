import React from "react";
import useGenres from "../hooks/useGenres";

const GenresList = () => {
  const { genres, isLoading, errors } = useGenres();

  return (
    <div>
      <ul>
        {genres.map((singleGenre) => (
          <li key={singleGenre.id}>{singleGenre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenresList;
