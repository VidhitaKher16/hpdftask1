import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CardTweet = () => (
  <Card>
    <CardHeader
      title="NarendraModi"
      subtitle="@NModi	.5h"
      avatar="./Nmodi.png"
    />
    <CardText>
      Spoke to Pranab Da and wished him on his birthday. His impeccable service endears him to every Indian. 
	  <p>I pray for Pranab Da's long and healthy life. @CitiznMukherjee</p>
    </CardText>
    <CardActions>
      <FlatButton label="Comment	3" />
	  <FlatButton label="Love	2" secondary={true} />
      <FlatButton label="ReTweet	5" />
    </CardActions>
  </Card>
);

export default CardTweet;