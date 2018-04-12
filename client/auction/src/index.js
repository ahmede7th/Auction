import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';

export default class ButtonExample extends Component {
  render(){
    return (
      <Container>
        <Content>
          <Button>
            <Text> Click Me! </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
