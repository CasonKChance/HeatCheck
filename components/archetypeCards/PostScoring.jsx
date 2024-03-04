import * as React from 'react';
import {Button, Card, Text } from 'react-native-paper';


const PostScoring = ({ onSelectPlaytype }) => (
  <Card>
    <Card.Cover source={require('../../assets/images/shaq.jpg')} />
    <Card.Content>
      <Text variant="titleLarge">Post Scoring</Text>
      <Text variant="bodyMedium">You are excellent playing around the basket and finishing over others</Text>
    </Card.Content>
    <Card.Actions>
      <Button onPress={onSelectPlaytype}>Select</Button>
    </Card.Actions>
  </Card>
);

export default PostScoring;