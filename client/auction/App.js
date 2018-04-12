import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';

import { Container, Header, Content, Button, Text } from 'native-base';
export default class ButtonExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button>
            <Text> Click Me! </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
