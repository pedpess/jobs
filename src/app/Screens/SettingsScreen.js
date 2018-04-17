import React from 'react';
import { View, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SettingsScreen extends React.Component {

    static navigationOptions ={
        header: {
            style: {
                marginTop: Platform.OS === 'android' ? 24 : 0
            }
        }
    }
    render() {
        return (
            <View style={{ marginTop: 10 }}>
                <Button
                    title="Reset Liked Jobs"
                    large
                    icon={{ name: 'delete-forever' }}
                    backgroundColor="#F44336"
                    onPress={() => {
                        this.props.clearLikedJobs()
                        this.props.navigation.navigate('review')
                    }}
                />
            </View>
        );
    }
}

export default connect(null, actions)(SettingsScreen)