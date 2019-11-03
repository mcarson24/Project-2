export const testMovieDetails = async (plotLength = 'short') => {
	const response = await fetch(`https://www.omdbapi.com/?apikey=d81f2995&i=tt0121765&plot=${plotLength}&r=json`)
	const results = await response.json()
	return results
}

export const getMovies = async (title, plotLength = 'short') => {
	const response = await fetch(`https://www.omdbapi.com/?apikey=d81f2995&s=${title}&plot=${plotLength}&r=json`)
	const results = await response.json()
	return results	
}


