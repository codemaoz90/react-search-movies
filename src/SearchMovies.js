import React, { useEffect, useState } from "react";
export default function SearchMovies() {
	const [query, setQuery] = useState("");
	const [movies, setMovies] = useState([]);

	const searchMovies = async (e) => {
		e.preventDefault();
		// console.log("Submitted");
		const url = `https://api.themoviedb.org/3/search/movie?api_key=78ee8903ccd95b293b772bd769f33bc9&query=${query}`;
		try {
			const res = await fetch(url);
			const data = await res.json();
			setMovies(data.results);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<form className="form">
				<label className="label" htmlFor="query">
					Movie Name:
				</label>
				<input
					type="text"
					name="query"
					placeholder="i.e. Jurassic Park"
					className="input"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button
					className="button"
					type="submit"
					onClick={(e) => searchMovies(e)}
				>
					SUBMIT
				</button>
			</form>
			<div className="card-list">
				{movies
					.filter((movie) => movie.poster_path)
					.map((movie) => (
						<div className="card" key={movie.id}>
							<img
								className="card--image"
								src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
								alt={movie.title + " poster"}
							/>
							<div className="card--content">
								<h3 className="card--title">{movie.title}</h3>
								<p>
									<small>RELEASE DATE: {movie.release_date}</small>
								</p>
								<p>
									<small>RATING: {movie.vote_average}</small>
								</p>
								<p className="card--desc">{movie.overview}</p>
							</div>
						</div>
					))}
			</div>
		</>
	);
}
