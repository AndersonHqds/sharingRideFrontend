import React, {Component} from 'react';

import {Text} from 'react-native';
import {Spinner} from 'native-base';
import Geolocation from '@react-native-community/geolocation';
import {getUniqueId} from 'react-native-device-info';
// import { Container } from './styles';

export default class Driver extends Component {
  state = {
    isSearching: false,
    driver: {
      id: null,
      isAvailable: true,
      amountPlaces: 4,
      name: 'Anderson',
      placa: 'EOP-5275',
      from: {
        latitude: 'a',
      },
      stops: [[]],
    },
  };

  constructor() {
    super();
  }
  async componentDidMount() {
    const id = await getUniqueId();
    const socket = this.props.navigation.getParam('socket', '');
    console.log(socket);
    if (!this.props.isSearching) {
      Geolocation.getCurrentPosition(position => {
        const driver = {
          ...this.state.driver,
          id,
          from: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
          stops: [[-22.707921, -47.369918]],
        };
        this.setState({
          driver,
          isSearching: true,
        });
        socket.emit('driver-status', driver);
      });
    }
  }

  render() {
    if (this.state.isSearching) {
      return <Spinner />;
    }
    return <Text>Driver</Text>;
  }
}
