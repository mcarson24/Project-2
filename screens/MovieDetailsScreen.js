import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { testMovieDetails } from '../api'
import Rating from '../components/Rating'

export default class MovieDetailsScreen extends React.Component {
	static navigationOptions = ({navigation}) => {
		return {
			headerTitle: navigation.getParam('movie').Title
		}
	}

	componentDidMount() {
		this.setState({
			movie: this.props.navigation.getParam('movie'),
		}, () => console.log(this.state.movie))
	}

	state = {
		movie: '',
	}

	render() {
		return (
			<ScrollView style={styles.container} contentContainer={{alignItems: 'center', justifyContent: 'flex-start'}}>
				<Image style={styles.poster}
			           source={{ uri: this.state.movie.Poster}}
			           />
	           	<View style={styles.infoContainer}>
					<ScrollView>
						<Text style={styles.plot}>{this.state.movie.Plot}</Text>
						<Text style={styles.title}>{this.state.movie.Title}</Text>
					</ScrollView>
					<View style={styles.ratingsContainer}>
		           		{ this.props.navigation.getParam('movie').Ratings && (this.props.navigation.getParam('movie').Ratings.map((rating, index) => (
		           			<Rating rating={rating} key={index} />
	           			)))}
           			</View>
	           	</View>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	infoContainer: {
		paddingHorizontal: 25
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	plot: {
	},
	poster: {
		height: 500,
		width: '100%'
	},
	ratingsContainer: {
		flex: 1,
		flexDirection: 'row'
	}
})
