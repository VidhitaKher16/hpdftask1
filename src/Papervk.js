import React from 'react';
import Paper from 'material-ui/Paper';
import Iconvk from './Iconvk';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import CardTweet from './CardTweet';
const style = {
  height: 500,
  width: '100%',
  margin: 100,
  textAlign: 'left',
  display: 'inline-block',
};

const Papervk = () => (
  <div style={style} className="Papervk">
    <Paper zDepth={5}/>
	<div className="midheader">
			<div className="Trends-vk">
				<h3>TrendsForYou.<a href="Change">Change</a></h3>
					<span> #MumbaiPolice 50K<br/></span>
					<span> #IMAD 35K<br/></span>
					<span> #LuxGoldenRoseAwards 25k<br/> </span>
					<span> #TEDTalks 60K<br/></span>
					<span> #MondayMotivation 20K<br/></span>
			</div>
			</div>
			<CardTweet />
			<div>
	  
		</div>
        
  </div>
);

export default Papervk;
