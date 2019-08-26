import React from 'react';
import {Text, Button} from 'react-native';

import {Screen} from '../components';
import {ROUTENAMES} from '../constants';

const {PROFILE} = ROUTENAMES;

const Login = ({navigation}) => {
  const proceedToProfile = () => navigation.push(PROFILE);
  return (
    <Screen>
      <Button onPress={proceedToProfile} title="to profile" />
      <Text style={{color: 'white'}}>login</Text>
    </Screen>
  );
};

export default Login;
