import * as React from 'react';
import {Button, Card, Text } from 'react-native-paper';


const SharpShooter = ({ onSelectPlaytype }) => (
  <Card>
    <Card.Cover source={require('../../assets/images/kobe.jpg')} />
    <Card.Content>
      <Text variant="titleLarge">Shot Creating</Text>
      <Text variant="bodyMedium">You can create open shots for yourself off the dribble and get to your spots</Text>
    </Card.Content>
    <Card.Actions>
      <Button onPress={onSelectPlaytype}>Select</Button>
    </Card.Actions>
  </Card>
);

export default SharpShooter;