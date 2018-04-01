import { AsyncStorage } from 'react-native';

import {
    FACEBOOK_LOGIN_SUCCESS
} from './types';

export const facebookLogin = () => {
    return async function (dispatch) {
        let token = await AsyncStorage.getItem('fb_token');

        if (token) {
            // Dispatch action to use the existing token

        } else {
            // Start FB login process to get a new token
        }
    }
};

