import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const CustomPagination = ({ setPage, numberOfPages = 10 }) => {

	const handlePageChange = (page) => {
		setPage(page)
		window.scroll(0, 0)
	}

	const darkTheme = createMuiTheme({
		palette: {
			type: "dark"
		},
	})

	const styleWrapper = {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		marginTop: '10px'
	}

	return (
		<div style={styleWrapper}>
			<ThemeProvider theme={darkTheme}>
				<Pagination
					count={numberOfPages}
					onChange={(e) => handlePageChange(e.target.textContent)}
					color="primary"
					hideNextButton
					hidePrevButton
				/>
			</ThemeProvider>
		</div>
	);
}

export default CustomPagination;