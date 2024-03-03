import * as React from 'react';
import {Button, Card, Text } from 'react-native-paper';


const SharpShooter = ({ onSelectPlaytype }) => (
  <Card>
    <Card.Cover source={require('../../assets/images/curry.jpg')} />
    <Card.Content>
      <Text variant="titleLarge">Sharp Shooter</Text>
      <Text variant="bodyMedium">You have excellent shooting skills, especially spot-up shooting</Text>
    </Card.Content>
    <Card.Actions>
      <Button onPress={onSelectPlaytype}>Select</Button>
    </Card.Actions>
  </Card>
);

export default SharpShooter;