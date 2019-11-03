import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { testMovieDetails, getMovies } from '../api'
import _ from 'lodash'

let debouncedVersion = ''

export default class SearchScreen extends React.Component {
	state = {
		movie: '',
		search: '',
		timer: '',
		debouncedVersion: ''
	}

	componentDidMount() {
		// this.getMovieDetails()
	}

	componentDidUpdate() {
		console.log(this.state.movie)
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

	changeText = text => {
		this.setState(prevState => ({
			search: text
		}))
		console.log(this.state.search)
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>TODO: Search Screen</Text>
				<TextInput style={{ width: '75%', backgroundColor: 'orange', paddingHorizontal: 25, paddingVertical: 15}} 
						   onChangeText={_.debounce(this.changeText, 500)}
						   />
				<Button title="Movie Details"
						onPress={() => this.props.navigation.navigate('Details', {
							movie: this.state.movie
						})}
						/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})
