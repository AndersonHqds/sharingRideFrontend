import styled from 'styled-components/native';
import {Container, View, Text, Card} from 'native-base';
export const WelcomeMenu = styled.View`
  height: 200px;
  background-color: #3b67dc;
  align-items: center;
  justify-content: center;
`;

export const WelcomeContainer = styled(View)`
  flex: 1;
  width: 300px;
  position: absolute;
  top: 80px;
`;

export const WelcomeTextContainer = styled(Card)`
  background-color: #fff;
  height: 20px;
  padding: 30px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const WelcomeText = styled(Text)`
  font-size: 23px;
  color: #a0a0a0;
  text-align: center;
  font-weight: bold;
`;

export const ContainerView = styled(Container)`
  background-color: #f1f1f1;
`;

export const LottieContainer = styled(View)`
  flex: 1;
`;
