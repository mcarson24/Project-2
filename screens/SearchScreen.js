import React from 'react'
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import { testMovieDetails, getMovies, getTestMovies } from '../api'
import _ from 'lodash'
import { search } from '../mockData'
import Movie from '../components/Movie'

export default class SearchScreen extends React.Component {
	state = {
		movie: '',
		search: '',
		movies: []
	}

	componentDidMount() {
		
	}

	componentDidUpdate() {
		// console.log(this.state.movies)
	}

	getMovieDetails = async () => {
		if (this.props.screenProps.fullPlot) {
			const movie = await getMovies(this.state.search, 'full')
			this.setState({movie})
		} else {
			const movie = await getMovies(this.state.search)
			this.setState({movie})
		}
	}

	pressMovie = movie => {
		this.props.navigation.navigate('Details', {
			movie: movie
		})
	}

	getMoviesTest = () => {
		const movies = getTestMovies()
		this.setState({
			movies: movies.Search
		})
	}

	changeText = text => {
		this.setState(prevState => ({
			search: text
		}))
		this.getMoviesTest()
	}

	render() {
		return (
			<View style={styles.container}>
				<TextInput style={{ width: '75%', backgroundColor: 'orange', paddingHorizontal: 25, paddingVertical: 15}} 
						   onChangeText={_.debounce(this.changeText, 500)}
						   />
				<View style={styles.searchContainer}>
					<FlatList data={this.state.movies}
							  renderItem={({item}) => <Movie data={item} handlePress={() => this.pressMovie(item)} />}
							  keyExtractor={item => item.imdbID}
							  style={{marginTop: 25}}
							  />
		      	</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingVertical: 15
	},
	searchContainer: {
		paddingLeft: 25,
		width: '100%'
	}
})
