import React, { Component } from 'react';
import Tbird from './Tbird.png'
import Aliabhatt from './Aliabhatt.png'
import Akki from './Akki.png'
import Bgates from './Bgates.png'
import Twitter_bird_logo_2012 from './Twitter_bird_logo_2012.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import CardTweet from './CardTweet';

import Cardvk1 from './Cardvk1';
import Papervk from './Papervk';
import Tabvk from './Tabvk';
import TrendsForYou from './TrendsForYou';

const Stylea ={
	width: '100%'
}

const Styleb ={
	width: '50%'
}
class App extends Component {
  render() {
    return (
	
	<MuiThemeProvider>
	<header className="App-header">
	{/*<img src={Twitter_bird_logo_2012} className="App-logo" alt="Twitter_bird_logo_2012" />*/}
           <h1 className="App-title">Welcome to Twitter</h1>
        
		<div className="topnav">
			<a className="active" href="#home">Home</a>
			<a href="#about">Notifications</a>
			<a href="#contact">Messages</a>
			<img src={Tbird} className="App-logo" alt="Twitter_bird_logo_2012" />
			<input type="text" placeholder="Search Twitter"/>
		</div>
		<div className="upperheader">
			<div className="Card-vk">
				<Cardvk1 />
			</div>
			<div className="Tweet-vk">
				<MyAwesomeReactComponent />
			</div>
		
			<div className="Whotofollow-vk">
			<table>
			<tr>
			<th><h2>Who to follow.</h2></th>
			<th><a href="Refresh">Refresh</a></th> 
				<th><a href="ViewAll">ViewAll</a></th>
			  </tr>
			<tr>
			<th><img src={Akki} className="App-logo" alt="Akshay_Kumar" /></th>
			<th>Akshay Kumar</th> 
				<th><button type="button" onclick="alert('FollowAkshay!')">Follow</button></th>
			  </tr>
			  <tr>
			<th><img src={Aliabhatt} className="App-logo" alt="Alia_Bhatt" /></th>
			<th>Alia Bhatt</th> 
				<th><button type="button" onclick="alert('FollowAlia!')">Follow</button></th>
			  </tr>
			  <tr>
			<th><img src={Bgates} className="App-logo" alt="Bgates" /></th>
			<th>Bill Gates</th> 
				<th><button type="button" onclick="alert('FollowBillGates!')">Follow</button></th>
			  </tr>
			</table>
			</div>
		</div>
		<div className="midheader">
			<div className="Trends-vk">
				<h3>TrendsForYou.<a href="Change">Change</a></h3>
					<span> #MumbaiPolice 50K<br/></span>
					<span> #IMAD 35K<br/></span>
					<span> #LuxGoldenRoseAwards 25k<br/> </span>
					<span> #TEDTalks 60K<br/></span>
					<span> #MondayMotivation 20K<br/></span>
			</div>
			<div className="Card-tweet">
			<CardTweet />
			</div>
		</div>
		{/*<Papervk />*/}
		
        {/*<p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
		
		</header>
	  </MuiThemeProvider>
    );
  }
}

export default App;
