import React, {useEffect} from 'react';

import {Text} from 'react-native';
import {Spinner} from 'native-base';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as DriverActions from '~/store/modules/driver/actions';
// import { Container } from './styles';

function Driver({navigation, isSearching, updateDriverData}) {
  useEffect(() => {
    const socket = navigation.getParam('socket', '');
    updateDriverData(socket);
  }, [navigation, updateDriverData]);

  return <>{isSearching ? <Spinner /> : <Text>Driver</Text>}</>;
}
const mapStateToProps = state => state;
const mapDispatchToProps = dispatch =>
  bindActionCreators(DriverActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Driver);
