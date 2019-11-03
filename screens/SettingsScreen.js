import React from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native'
import { Ionicons } from 'react-native-vector-icons'
import { options } from '../options'

export default class SettingsScreen extends React.Component {
	static navigationOptions = {
		tabBarIcon: ({ tintColor }) => (
			<Ionicons name="ios-options"
					  		size={25}
					  		color={tintColor}
					  		/>
		)
	}

	state = {
		fullPlot: null
	}

	componentDidMount() {
		this.setState({
			fullPlot: this.props.screenProps.fullPlot
		})
	}

	something = () => {
		this.setState(prevState => ({
			fullPlot: !prevState.fullPlot				
		}), () => {
			this.props.screenProps.fullPlot = this.state.fullPlot		
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.option}>
					<Text>Show Full Movie Plot</Text>
					<Switch value={this.state.fullPlot}
									onValueChange={() => this.something()}/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%'
	}, 
	option: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '75%'
	}
})
