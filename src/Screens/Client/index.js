import React, {Component} from 'react';

import {Text} from 'react-native';
// import { Container } from './styles';

export default class Client extends Component {
  state = {
    client: {
      from: {
        latitude: -22.711031,
        longitude: -47.368319,
      },
      to: {
        latitude: -22.714613,
        longitude: -47.364971,
      },
      nome: 'Anderson Cliente',
    },
  };
  componentDidMount() {
    const socket = this.props.navigation.getParam('socket', '');
    socket.emit('search-drivers', this.state.client, drivers => {
      console.warn(drivers);
    });
  }

  render() {
    return <Text>Client</Text>;
  }
}
