import * as React from 'react';
import {Button, Card, Text } from 'react-native-paper';


const Slashing = ({ onSelectPlaytype }) => (
  <Card>
    <Card.Cover source={require('../../assets/images/cesco.jpg')} />
    <Card.Content>
      <Text variant="titleLarge">Slashing</Text>
      <Text variant="bodyMedium">You are excellent at driving to the basket and finishing inside</Text>
    </Card.Content>
    <Card.Actions>
      <Button onPress={onSelectPlaytype}>Select</Button>
    </Card.Actions>
  </Card>
);

export default Slashing;