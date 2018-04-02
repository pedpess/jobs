import React from 'react';
import { View, Text } from 'react-native';
import { MapView } from 'expo';

export default class MapScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <MapView style={{ flex: 1 }} />
            </View>
        );
    }
}