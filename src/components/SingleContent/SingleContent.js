import React from 'react';
import { img_300, unavailable } from '../../config/config'
import './SingleContent.css'
import Badge from '@material-ui/core/Badge';
import ContentModal from '../ContentModal/ContentModal';

const SingleContent = ({ id, img, title, date, media_type, vote_average }) => {

	return (
		<ContentModal media_type={media_type} id={id}>
			<Badge badgeContent={vote_average} color={vote_average > 6 ? 'primary' : 'secondary'} />
			<img className="poster" src={img ? `${img_300}${img}` : unavailable} alt={title} />
			<div className="title">{title}</div>
			<div className="subTitle mt-auto">
				{media_type === 'tv' ? "TV Series" : "Movies"}
				<div className="subTitle">{date}</div>
			</div>
		</ContentModal>
	);
}

export default SingleContent;