import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default class SearchScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>TODO: Search Screen</Text>
				<Button title="Movie Details"
						onPress={() => this.props.navigation.navigate('Details', {
							movie: {
								title: 'The Count of Monte Cristo'
							}
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
