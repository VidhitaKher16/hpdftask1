import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Topnewscard = () => (
  <Card>
    <CardHeader
      title="TOP News"
      subtitle="aadhar"

    />
    <CardMedia
      overlay={<CardTitle title="CNN-IBN" subtitle="@CNNIBNNews" />}
    >
      <img src="./AadharCard.png" alt="" />
    </CardMedia>
    <CardText>
      The Central Board of Direct Taxes on Friday extended the deadline for linking PAN with the 12-digit biometric Aadhar number to March 2018
    </CardText>
 
  </Card>
);

export default Topnewscard;