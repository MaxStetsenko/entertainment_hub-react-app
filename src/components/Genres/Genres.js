import React, { useEffect } from 'react';
import Chip from '@material-ui/core/Chip';
import axios from 'axios';

const Genres = ({ type, selectedGenres, setSelectedGenres, genres, setGenres, setPage }) => {

	const handleAdd = (genre) => {
		setSelectedGenres([...selectedGenres, genre])
		setGenres(genres.filter((g) => g.id !== genre.id))
		setPage(1)
	}

	const handleRemove = (genre) => {
		setGenres([...genres, genre])
		setSelectedGenres(selectedGenres.filter(g => g.id !== genre.id))
		setPage(1)
	}

	const fetchGenres = async () => {
		const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
		setGenres(data.genres)
	}


	useEffect(() => {
		fetchGenres()

		return () => {
			setGenres({})
		}

		// eslint-disable-next-line
	}, [])


	return (
		<div style={{ padding: '6px 0' }}>
			{
				selectedGenres && selectedGenres.map(genre => {
					return <Chip
						label={genre.name}
						key={genre.id}
						style={{ margin: '2px' }}
						clickable size='small'
						color="primary"
						onDelete={() => handleRemove(genre)}
					/>
				})
			}
			{
				genres && genres.map(genre => {
					return <Chip
						label={genre.name}
						key={genre.id}
						style={{ margin: '2px' }}
						clickable size='small'
						onClick={() => handleAdd(genre)}
					/>
				})
			}
		</div>
	);
}

export default Genres;