import React, {useEffect, useState} from 'react';
import {Alert, Text, StyleSheet} from 'react-native';
import {
  LoginButton,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

import {Screen} from '../components';
import {COLORS} from '../constants';

const {alert} = Alert;
const {GREEN, ORANGE} = COLORS;

export default ({navigation}) => {
  const [name, setName] = useState('');
  const responseInfoCallback = (error, result) => {
    if (error) {
      alert('Error fetching data: ' + error.toString());
    } else {
      setName(result.name.toString());
    }
  };
  const infoRequest = new GraphRequest('/me', null, responseInfoCallback);
  useEffect(() => {
    new GraphRequestManager().addRequest(infoRequest).start();
  }, []);
  const logoutCallback = (error, result) => {
    if (error) {
      alert('Error while logging out!');
      return;
    } else {
      navigation.pop();
    }
  };
  const {label, userName} = styles;
  return (
    <Screen>
      <LoginButton onLogoutFinished={logoutCallback} />
      {!!name && (
        <>
          <Text style={[userName, label]}>Your name is: </Text>
          <Text style={userName}>{name}</Text>
        </>
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  userName: {
    color: ORANGE,
    marginTop: 10,
  },
  label: {
    color: GREEN,
  },
});
