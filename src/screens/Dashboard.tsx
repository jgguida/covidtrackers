import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import Ticket from '../components/Check';
import { Navigation } from '../types';
import { TextInput } from 'react-native-paper';

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => (
  <Background>
    <Logo />
    <Header>Welcome Vitor</Header>
    <Paragraph>
      Let's check your vaccine
    </Paragraph>
    <TextInput />
    <Button mode="outlined" onPress={() => navigation.navigate('ForgotPasswordScreen')}>
      Check
    </Button>
    <Button mode="outlined" onPress={() => navigation.navigate('HomeScreen')}>
      Back
    </Button>
  </Background>
);

export default memo(Dashboard);
