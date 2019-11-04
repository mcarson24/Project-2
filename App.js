import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from 'react-native-vector-icons'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import MovieDetailsScreen from './screens/MovieDetailsScreen'
import SearchScreen from './screens/SearchScreen'
import SettingsScreen from './screens/SettingsScreen'

export default function App() {
  return (
    <AppContainer screenProps={{ fullPlot: false}}/>
  );
}

const MoviesTab = createStackNavigator({
  Search: SearchScreen,
  Details: MovieDetailsScreen
}, {
  initialRouteName: 'Search',
})

MoviesTab.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Ionicons name="ios-search"
              size={25}
              color={tintColor}
              />
  )
}

const TabNavigator = createBottomTabNavigator({
  Search: MoviesTab,
  Settings: SettingsScreen
}, {
  tabBarOptions: {
    activeTintColor: 'green'
  }
})

const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
