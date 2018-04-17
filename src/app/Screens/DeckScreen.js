import React from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Button, Icon } from 'react-native-elements';
import Swipe from '../components/Swipe';
import * as actions from '../actions';

class DeckScreen extends React.Component {

    static navigationOptions = {
        title: 'Jobs',
        tabBarIcon: ({ tintColor }) => {
            return <Icon name="description" size={25} color={tintColor} />
        }
    }

    renderCard(job) {

        const initialRegion = {
            longitude: job.longitude,
            latitude: job.latitude,
            latitudeDelta: 0.045,
            longitudeDelta: 0.02
        }

        return (
            <Card title={job.jobtitle}>
                <View style={{ height: 300 }}>
                    <MapView
                        scrollEnabled={false}
                        style={{ flex: 1 }}
                        cacheEnabled={Platform.OS === 'android' ? true : false}
                        initialRegion={initialRegion}
                    >
                    </MapView>
                </View>
                <View style={styles.detailsWrapper}>
                    <Text>{job.company}</Text>
                    <Text>{job.formattedRelativeTime}</Text>
                </View>
                <Text>
                    {job.snippet.replace(/<b>/g, '').replace(/<\/b/g, '')}
                </Text>
            </Card>
        );
    }

    renderNoMoreCards = () => {
        return (
            <Card
                title="No More Jobs"
                style={{ marginTop: 10 }}
            >
                <Button
                    title="Back to Map"
                    large
                    icon={{ name: 'my-location' }}
                    backgroundColor="#03A9F4"
                    onPress={() => this.props.navigation.navigate('map')}
                />
            </Card>
        );
    }

    render() {
        return (
            <View style={{ marginTop: 10 }}>
                <Swipe
                    data={this.props.jobs}
                    renderCard={this.renderCard}
                    renderNoMoreCards={this.renderNoMoreCards}
                    onSwipeRight={job => this.props.likeJob(job)}
                    keyProp="jobkey"
                />
            </View>
        );
    }
}

const styles = {
    detailsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
}

function mapStateToProps({ jobs }) {
    return { jobs: jobs.results };
}

export default connect(mapStateToProps, actions)(DeckScreen);