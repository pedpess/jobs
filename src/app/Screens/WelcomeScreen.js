import React from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDES_DATA = [
    { text: 'Welcome to JobApp', color: '#03A9F4' },
    { text: 'Get a list interesting jobs', color: '#04A854' },
    { text: 'Set your location, then swipe away', color: '#F44336' },
]

export default class WelcomeScreen extends React.Component {

    onSlidesComplete = ()  => {
        this.props.navigation.navigate('auth');
    }

    render() {
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