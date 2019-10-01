import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './Screens/Home';
import Client from './Screens/Client';
import Driver from './Screens/Driver';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: {
          title: 'Home',
        },
      },
      Client: {
        screen: Client,
        navigationOptions: {
          title: 'Client',
        },
      },
      Driver: {
        screen: Driver,
        navigationOptions: {
          title: 'Driver',
        },
      },
    },
    {
      headerLayoutPreset: 'center',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#3b67dc',
        },
        headerTintColor: '#FFF',
      },
    },
  ),
);

export default Routes;
