import * as React from 'react';
import {Button, Card, Text } from 'react-native-paper';


const PlayMaking = ({ onSelectPlaytype }) => (
  <Card>
    <Card.Cover source={require('../../assets/images/magic.jpg')} />
    <Card.Content>
      <Text variant="titleLarge">Playmaking</Text>
      <Text variant="bodyMedium">You are a great ball handler and an even better passer</Text>
    </Card.Content>
    <Card.Actions>
      <Button onPress={onSelectPlaytype}>Select</Button>
    </Card.Actions>
  </Card>
);

export default PlayMaking;