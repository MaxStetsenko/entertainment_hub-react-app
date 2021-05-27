import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/CustomPagination/CustomPagination'
import '../Trending/Trending.css'
import Genres from '../../components/Genres/Genres'
import useGenres from '../../hooks/useGenres';



const Series = () => {


	const [page, setPage] = useState(1)
	const [content, setContent] = useState([])
	const [numOfPage, setNumOfPage] = useState()
	const [selectedGenres, setSelectedGenres] = useState([])
	const [genres, setGenres] = useState([])
	const genresForURL = useGenres(selectedGenres)


	const fetchMovies = async () => {
		const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genresForURL}`)
		setContent(data.results)
		setNumOfPage(data.total_pages)
	}


	useEffect(() => {
		window.scroll(0, 0);
		fetchMovies();
		// eslint-disable-next-line
	}, [page, genresForURL]);

	return (
		<div>
			<div className="pageTitle">TV Series</div>
			<Genres
				type='tv'
				selectedGenres={selectedGenres}
				setSelectedGenres={setSelectedGenres}
				genres={genres}
				setGenres={setGenres}
				setPage={setPage}
			/>
			<div className="trending">
				{
					content && content.map(el => {
						return <SingleContent
							key={el.id}
							id={el.id}
							img={el.poster_path}
							title={el.title || el.name}
							date={el.first_air_date || el.release_date}
							media_type='tv'
							vote_average={el.vote_average}
						/>
					})
				}
			</div>
			{
				numOfPage > 1 && <CustomPagination setPage={setPage} numberOfPages={numOfPage} />
			}
		</div>
	);
}

export default Series;