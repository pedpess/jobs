import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';

import {
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAILED
} from './types';

export const facebookLogin = () => async dispatch => {
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
        // Dispatch action to use the existing token
        dispatch({
            type: FACEBOOK_LOGIN_SUCCESS,
            payload: token
        });
    } else {
        // Start FB login process to get a new token
        doFacebookLogin(dispatch);
    }
};

const doFacebookLogin = async (dispatch) => {
    let { type, token } = await Facebook.logInWithReadPermissionsAsync('602119203464753', {
        permissions: ['public_profile']
    });

    if (type === 'cancel') {
        return dispatch({
            type: 'FACEBOOK_LOGIN_FAILED',

        });
    }

    await AsyncStorage.setItem('fb_token', token);
    
    dispatch({
        type: FACEBOOK_LOGIN_SUCCESS,
        payload: token
    });
};

