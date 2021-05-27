import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import axios from "axios";
import { noPicture, img_300 } from "../../config/config"
import "./Carousel.css"

const Carousel = ({ media_type, id }) => {

	const [credits, setCredits] = useState([])

	const handleDragStart = (e) => e.preventDefault();

	const items = credits.map(credit => (
		<div className="carouselItem">
			<img
				src={credit.profile_path ? `${img_300}/${credit.profile_path}` : noPicture}
				alt={credit?.name}
				onDragStart={handleDragStart}
				className="carouselItem__img"
			/>
			<b className="carouselItem__txt">{credit?.name}</b>
		</div>
	))

	const responsive = {
		0: {
			items: 3,
		},
		512: {
			items: 5,
		},
		1024: {
			items: 7,
		},
	};

	const fetchCredits = async () => {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
		);
		setCredits(data.cast);
	};

	useEffect(() => {
		fetchCredits();
		// eslint-disable-next-line
	}, []);

	return (
		<div>
			<AliceCarousel
				mouseTracking
				items={items}
				autoPlay
				autoPlayInterval="700"
				responsive={responsive}
				infinite
				disableDotsControls
				disableButtonsControls
			/>
		</div>
	)
}

export default Carousel