import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default props => (
	<View style={styles.rating}>
		<Text style={styles.number}>{props.rating.Value}</Text>
		<Text style={styles.source}>{props.rating.Source}</Text>
	</View>
)

const styles = StyleSheet.create({
	number: {
		fontSize: 28,
		fontWeight: 'bold'
	},
	rating: {
		width: '33%',
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	source: {
		fontSize: 12,
		fontWeight: 'normal',
		textAlign: 'center'
	}
})
