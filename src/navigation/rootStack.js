import {createStackNavigator} from 'react-navigation';

import {ROUTENAMES} from '../constants';
import {Login, Profile} from '../screens';

const {LOGIN, PROFILE} = ROUTENAMES;

export default createStackNavigator(
  {
    [LOGIN]: Login,
    [PROFILE]: Profile,
  },
  {
    initialRouteName: LOGIN,
    defaultNavigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
);
