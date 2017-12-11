import React from 'react';
import {Card, CardActions, CardHeader,CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Cardvk = () => (
 <Card>
	<CardHeader
	 title="Vidhita"
	 subtitle="@vidhi16kher"
	 avtar={<i class="material-icons">account_circle</i>}
	 />
	 <CardMedia
	 >
	 <img src="./vklogo.jpg" alt=""/>
	 </CardMedia>
	 <CardActions>
		<FlatButton Label="Tweets" />
		<FlatButton label="Following" secondary={true} />
		<FlatButton Label="Followers" />
	</CardActions>
	</Card>
	);
	
	export default Cardvk;