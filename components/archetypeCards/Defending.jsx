import React from 'react';
import { Button, Card, Text } from 'react-native-paper';

const Defending = ({ onSelectPlaytype }) => (
  <Card>
    <Card.Cover source={require('../../assets/images/gary.jpg')} />
    <Card.Content>
      <Text variant="titleLarge">Defending</Text>
      <Text variant="bodyMedium">You are excellent on defense and prevent the other team from scoring</Text>
    </Card.Content>
    <Card.Actions>
      <Button onPress={onSelectPlaytype}>Select</Button>
    </Card.Actions>
  </Card>
);

export default Defending;
