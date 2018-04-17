import React from 'react';
import { View, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import _ from 'lodash';
import Slides from '../components/Slides';

const SLIDES_DATA = [
    { text: 'Welcome to JobApp', color: '#03A9F4' },
    { text: 'Get a list interesting jobs', color: '#04A854' },
    { text: 'Set your location, then swipe away', color: '#F44336' },
]

export default class WelcomeScreen extends React.Component {

    state = {
        token: null
    }

    async componentWillMount() {
        let token = await AsyncStorage.getItem('fb_token');

        if (token) {
            this.props.navigation.navigate('map');
        } else {
            this.setState({ token: false })
        }
    }

    onSlidesComplete = () => {
        this.props.navigation.navigate('auth');
    }

    render() {

        if (_.isNull(this.state.token)) {
            return <AppLoading />;
        }

        return (
            <View style={{ flex: 1 }}>
                <Slides
                    data={SLIDES_DATA}
                    onComplete={this.onSlidesComplete}
                />
            </View>
        );
    }
}