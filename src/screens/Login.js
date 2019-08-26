import React from 'react';
import {Text, Button} from 'react-native';
import {LoginButton, AccessToken} from 'react-native-fbsdk';

import {Screen} from '../components';
import {ROUTENAMES} from '../constants';

const {PROFILE} = ROUTENAMES;

const Login = ({navigation}) => {
  const proceedToProfile = () => navigation.push(PROFILE);
  return (
    <Screen>
      <Button onPress={proceedToProfile} title="to profile" />
      <LoginButton
        onLoginFinished={(error, result) => {
          if (error) {
            console.log('login has error: ' + result.error);
          } else if (result.isCancelled) {
            console.log('login is cancelled.');
          } else {
            AccessToken.getCurrentAccessToken().then(data => {
              console.log(data);
            });
          }
        }}
        onLogoutFinished={() => console.log('logout.')}
      />
      <Text style={{color: 'white'}}>login</Text>
    </Screen>
  );
};

export default Login;
