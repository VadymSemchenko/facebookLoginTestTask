import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {LoginButton, AccessToken} from 'react-native-fbsdk';

import {Screen} from '../components';
import {ROUTENAMES} from '../constants';

const {alert} = Alert;
const {PROFILE} = ROUTENAMES;

export default ({navigation}) => {
  const [token, setToken] = useState('');
  useEffect(() => {
    const proceedToProfile = () => navigation.push(PROFILE);
    !!token && proceedToProfile();
  }, [token]);
  const tokenExtractor = async () => {
    try {
      const {accessToken} = await AccessToken.getCurrentAccessToken();
      !!accessToken && setToken(accessToken);
    } catch (error) {
      alert('Token extraction went wrong');
    }
  };
  const loginCallBack = (error, result) => {
    if (error) {
      alert('Login has error: ' + result.error);
    } else if (result.isCancelled) {
      alert('Login is cancelled.');
    } else {
      tokenExtractor();
    }
  };
  return (
    <Screen>
      <LoginButton onLoginFinished={loginCallBack} />
    </Screen>
  );
};
