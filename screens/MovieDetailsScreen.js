import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class MovieDetailsScreen extends React.Component {
	static navigationOptions = ({navigation}) => {
		return {
			headerTitle: navigation.getParam('movie').title
		}
	}
	render() {
		return (
			<View style={styles.container}>
				<Text>{this.props.navigation.getParam('movie').title}</Text>
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
