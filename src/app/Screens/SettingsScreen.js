import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ marginTop: 10 }}>
                <Button
                    title="Reset Liked Jobs"
                    large
                    icon={{ name: 'delete-forever' }}
                    backgroundColor="#F44336"
                    onPress={() => this.props.clearLikedJobs()}
                />
            </View>
        );
    }
}

export default connect(null, actions)(SettingsScreen)