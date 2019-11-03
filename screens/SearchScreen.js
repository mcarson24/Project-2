import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { testMovieDetails } from '../api'

export default class SearchScreen extends React.Component {
	state = {
		movie: ''
	}

	componentDidMount() {
		this.getMovieDetails()
	}

	componentDidUpdate() {
		this.getMovieDetails()
	}

	getMovieDetails = async () => {
		if (this.props.screenProps.fullPlot) {
			const movie = await testMovieDetails('full')
			this.setState({movie})
		} else {
			const movie = await testMovieDetails()
			this.setState({movie})
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>TODO: Search Screen</Text>
				<Button title="Movie Details"
						onPress={() => this.props.navigation.navigate('Details', {
							movie: this.state.movie
						})}
						/>
				<Text>{process.env.test}</Text>
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
