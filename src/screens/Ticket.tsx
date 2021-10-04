import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { Navigation } from '../types';
import { TextInput } from 'react-native-paper';

type Props = {
  navigation: Navigation;
};

const Ticket = ({ navigation }: Props) => (
 <Background>
  
    <Header>Welcome Vitor</Header>
    <Paragraph>
      Let's check your vaccine
    </Paragraph>
    <TextInput />
    <Button mode="outlined" onPress={() => navigation.navigate('HomeScreen')}>
      Check
    </Button>
  </Background>
);

export default memo(Ticket);
