import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from 'react-native-vector-icons'

export default class SettingsScreen extends React.Component {
	static navigationOptions = {
		tabBarIcon: ({ tintColor }) => (
			<Ionicons name="ios-options"
					  		size={25}
					  		color={tintColor}
					  		/>
		)
	}
	render() {
		return (
			<View style={styles.container}>
				<Text>TODO: Settings Screen</Text>
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
