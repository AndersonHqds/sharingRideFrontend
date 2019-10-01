import React, {useState, useCallback} from 'react';
import {Text} from 'react-native';
import socketIO from 'socket.io-client';
import {Button, CardItem} from 'native-base';
import LottieView from 'lottie-react-native';
import {
  WelcomeMenu,
  LottieContainer,
  ContainerView,
  WelcomeText,
  WelcomeContainer,
  WelcomeTextContainer,
} from './style';

const Home = ({navigation}) => {
  const styles = {
    button: {
      borderRadius: 4,
      marginTop: 3,
      marginBottom: 3,
      justifyContent: 'center',
    },
    buttonText: {
      alignSelf: 'center',
      fontWeight: 'bold',
    },
    greyButtonText: {
      color: '#FFF',
    },
  };
  const [isConnected, setConnection] = useState(false);
  const socket = socketIO('http://192.168.0.102:5000');

  useCallback(() => {
    socket.connect();
  }, [socket]);
  socket.on('connect', () => {
    setConnection(true);
  });

  return (
    <ContainerView>
      <WelcomeMenu>
        <WelcomeContainer>
          <Button
            disabled={!isConnected}
            style={styles.button}
            light
            onPress={() => navigation.navigate('Client', {socket})}>
            <Text style={styles.buttonText}>Get a ride</Text>
          </Button>
          <Button
            disabled={!isConnected}
            style={styles.button}
            success
            onPress={() => navigation.navigate('Driver', {socket})}>
            <Text style={(styles.buttonText, styles.greyButtonText)}>
              Give a ride
            </Text>
          </Button>
          <WelcomeTextContainer>
            <CardItem>
              <WelcomeText>Welcome to SharingRide app.</WelcomeText>
            </CardItem>
          </WelcomeTextContainer>
        </WelcomeContainer>
      </WelcomeMenu>
      <LottieContainer>
        <LottieView
          source={require('../../assets/lottie/3532-car.json')}
          autoPlay
          loop
        />
      </LottieContainer>
    </ContainerView>
  );
};

export default Home;
