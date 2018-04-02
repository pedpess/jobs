import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './src/app/store';
import AuthScreen from './src/app/screens/AuthScreen';
import WelcomeScreen from './src/app/screens/WelcomeScreen';
import MapScreen from './src/app/screens/MapScreen';
import DeckScreen from './src/app/screens/DeckScreen';
import ReviewScreen from './src/app/screens/ReviewScreen';
import SettingsScreen from './src/app/screens/SettingsScreen';

export default class App extends React.Component {
  render() {

    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator({
          map: { screen: MapScreen },
          deck: { screen: DeckScreen },
          review: {
            screen: StackNavigator({
              review: { screen: ReviewScreen },
              settings: { screen: SettingsScreen }
            })
          }
        })
      }
    }, {
      navigationOptions: {
        tabBarVisible: false,
      },
      lazy: true
    });

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
