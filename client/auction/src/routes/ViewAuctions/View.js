import React from 'react';
import { Container, Content, Card, CardItem, Text, Body, Icon} from 'native-base';

import { socket, socketApp } from '../../modules';

const auction = ({name, current_price, expiration_date, seller_username, top_bidder}) => (
  <Card>
    <Text>name:{name}</Text>
    <Text>current_price:{current_price}</Text>
    <Text>expiration_date:{expiration_date}</Text>
    <Text>seller_username:{seller_username}</Text>
    <Text>top_bidder:{top_bidder}</Text>
  </Card>
)

// const createdAuctions = () => {
//  this.props.auctionCreated(auction));
//  this.props.requestAuctions();
//  }

export default class ViewAuctions extends React.Component {

  componentWillMount() {
    socketApp.service('auctions').on('created', auction => this.props.auctionCreated(auction));
    this.props.requestAuctions();
 }

  render () {
    const { auctions=[] } = this.props;
    return (
      <Content>
        {
          auctions.map(auction)
        }
      </Content>
    );
  }
}
