import React, {useEffect} from 'react';

import {Text} from 'react-native';
import {Spinner} from 'native-base';
import Geolocation from '@react-native-community/geolocation';
import {getUniqueId} from 'react-native-device-info';
import {connect} from 'react-redux';

// import { Container } from './styles';

function Driver(props) {
  console.tron.log(props)
  const socket = props.navigation.getParam('socket', '');
  return (
    <>
      { props.isSearching ? <Spinner /> : <Text>Driver</Text> }
    </>
  )
}
const mapStateToProps = state => state
export default connect(mapStateToProps)(Driver);
