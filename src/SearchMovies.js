import React, { useState } from "react";
export default function SearchMovies() {
	const [query, setQuery] = useState("");
	const searchMovies = async (e) => {
		e.preventDefault();
		// console.log("Submitted");
		const url = `https://api.themoviedb.org/3/search/movie?api_key=78ee8903ccd95b293b772bd769f33bc9&query=${query}`;
		try {
			const res = await fetch(url);
			const data = await res.json();
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
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
			<button className="button" type="submit" onClick={(e) => searchMovies(e)}>
				SUBMIT
			</button>
		</form>
	);
}
