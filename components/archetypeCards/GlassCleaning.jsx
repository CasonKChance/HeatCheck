import * as React from 'react';
import {Button, Card, Text } from 'react-native-paper';


const GlassCleaning = ({ onSelectPlaytype }) => (
  <Card>
    <Card.Cover source={require('../../assets/images/rodman.jpg')} />
    <Card.Content>
      <Text variant="titleLarge">Glass Cleaning</Text>
      <Text variant="bodyMedium">You rebound well and are usually taller than others</Text>
    </Card.Content>
    <Card.Actions>
       <Button onPress={onSelectPlaytype}>Select</Button>
    </Card.Actions>
  </Card>
);

export default GlassCleaning;