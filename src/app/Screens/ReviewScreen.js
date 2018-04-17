import React from 'react';
import { Platform, ScrollView, View, Text, Linking } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import { MapView } from 'expo';
import { connect } from 'react-redux';

class ReviewScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Review Jobs',
        headerRight: (
            <Button
                title="Settings"
                onPress={() => { navigation.navigate('settings') }}
                backgroundColor="rgba(0,0,0,0)"
                color="rgba(0,122,255,1)"
            />
        ),
        style: {
            marginTop: Platform.OS === 'android' ? 24 : 0
        },
        tabBarIcon: ({ tintColor }) => {
            return <Icon name="favorite" size={25} color={tintColor} />
        }
    })

    renderLikedJobs() {
        return this.props.likedJobs.map(job => {

            const {
                company,
                formattedRelativeTime,
                url,
                jobkey,
                longitude,
                latitude,
                jobtitle,
            } = job;

            const initialRegion = {
                longitude,
                latitude,
                latitudeDelta: 0.045,
                longitudeDelta: 0.02
            }

            return (
                <Card
                    key={jobkey}
                    title={jobtitle}
                >
                    <View style={{ height: 200 }}>
                        <View style={styles.detailWrapper}>
                            <Text style={styles.italics}>{company}</Text>
                            <Text style={styles.italics}>{formattedRelativeTime}</Text>
                        </View>
                        <MapView
                            scrollEnabled={false}
                            style={{ flex: 1, marginBottom: 10 }}
                            cacheEnabled={Platform.OS === 'android'}
                            initialRegion={initialRegion}
                        />
                    </View>
                    <Button
                        title="Apply Now"
                        backgroundColor="#03A9F4"
                        onPress={() => Linking.openURL(url)}
                    />
                </Card>
            );
        });
    }

    render() {
        return (
            <ScrollView>
                {this.renderLikedJobs()}
            </ScrollView>
        );
    }
}

const styles = {
    detailWrapper: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    italics: {
        fontStyle: 'italic',
    }
};

function mapStateToProps(state) {
    return { likedJobs: state.likedJobs };
}

export default connect(mapStateToProps)(ReviewScreen);
