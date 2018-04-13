import React from 'react';
import { Container, Content, Card, CardItem, Text, Body, Icon} from 'native-base';

const auction = ({name, current_price, expiration_date, seller_username, top_bidder}) => (
  <Card>
    <Text>name:{name}</Text>
    <Text>current_price:{current_price}</Text>
    <Text>expiration_date:{expiration_date}</Text>
    <Text>seller_username:{seller_username}</Text>
    <Text>top_bidder:{top_bidder}</Text>
  </Card>
)


export default () => (
  <Container>
      <Content>
      {
        auction({
          "name": "test",
          "current_price": "100.00",
          "expiration_date": "2019-06-21T16:00:00.000Z",
          "seller_username": "tester",
          "top_bidder": "aly",
        })
      }
      {
        auction({
          "name": "test1",
          "current_price": "100.00",
          "expiration_date": "2019-06-21T16:00:00.000Z",
          "seller_username": "tester1",
          "top_bidder": "aly",
        })
      }
      {
        auction({
          "name": "test2",
          "current_price": "100.00",
          "expiration_date": "2019-06-21T16:00:00.000Z",
          "seller_username": "tester2",
          "top_bidder": "aly",
        })
      }
      </Content>
  </Container>
);
