import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';

export default class MapScreen extends React.Component {

    state = {
        region: {
            longitude: -122,
            latitude: 37,
            latitudeDelta: 0.04,
            longitudeDelta: 0.09,
        },
        mapLoaded: false,
    }

    componentDidMount() {
        this.setState({ mapLoaded: true });
    }

    render() {

        if (!this.state.mapLoaded) {
            return (
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator size="large" />
                </View>
            );
        }
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    map
                    region={this.state.region}
                    style={{ flex: 1 }}
                />
            </View>
        );
    }
}