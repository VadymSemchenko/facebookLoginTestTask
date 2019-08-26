import React from 'react';
import {StatusBar} from 'react-native';

import RootApp from './navigation';

export default () => (
  <>
    <StatusBar barStyle="light-content" />
    <RootApp />
  </>
);
