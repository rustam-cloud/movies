export const MovieCard = ({ data = {} }) => {
  const rating = data["vote_average"] * 10;
  const date = `${new Date(Date.parse(data["release_date"])).toDateString()}`.split(" ");
  const dateRelease = `${date[2]} ${date[1]} ${date[3]}`;

  return (
    <div className="movie-card">
      <button className="movie-card__btn">...</button>
      <img
        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${data?.backdrop_path}`}
        className="movie-card__img"
        loading="lazy"
        width="1"
        height="1"
        alt="what`s wrong with downloading"
        decoding="async"
      />

      <div className="movie-card__rating">
        <div
          style={
            rating < 50 ? { color: "red" } : rating < 75 ? { color: "orange" } : { color: "green" }
          }
        >
          {rating}
        </div>
      </div>

      <div className="movie-card__info">
        <h4 className="movie-card__info-title">{data?.title}</h4>
        <p className="movie-card__info-release_date">{dateRelease}</p>
      </div>
    </div>
  );
};