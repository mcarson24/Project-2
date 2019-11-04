import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

const truncateMovieTitle = title => {
	if (title.length > 25) return `${title.substring(0, 25)}...`

	return title
}

export default props => (
	<View style={styles.container}>
		<TouchableOpacity style={styles.container}
						  onPress={() => props.handlePress(props.data)}>
			<Image style={styles.poster}
		           source={{ uri: props.data.Poster }}
		           />
		    <View style={styles.movieTitle}>
				<Text style={styles.movieTitleText}>{truncateMovieTitle(props.data.Title)}</Text>
				<Text style={styles.movieTitleYear}>({props.data.Year})</Text>
		    </View>
		</TouchableOpacity>
	</View>
)

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginBottom: 15
	},
	poster: {
		width: 55,
		height: 55,
		marginRight: 15
	},
	movieTitle: {
		flexDirection: 'row'
	},
	movieTitleText: {
		fontWeight: 'bold',
		fontSize: 16,
		marginRight: 5
	},
	movieTitleYear: {
		fontSize: 16
	}
})
