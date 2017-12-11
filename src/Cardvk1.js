import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Cardvk1 = () => (
  <Card>
    <CardHeader
      title="Vidhita Kher"
      subtitle="@vidhi16kher"
      avatar="./vklogo.jpg"
    />
	{/*<CardMedia
      overlay={<CardTitle title="Vk" subtitle="Vk" />}
    >
      <img src="./clear_blue_sky.jpg" alt="" />
    </CardMedia>*/}
    <CardActions>
      <FlatButton label="Tweets 23" />
      <FlatButton label="Following 34" />
	  <FlatButton label="Followers 56" />
    </CardActions>
  </Card>
);

export default Cardvk1;
