import React, { Component } from 'react';
import Tbird from './Tbird.png'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import CardTweet from './CardTweet';
import FlatButton from 'material-ui/FlatButton';
import Topnewscard from './Topnewscard';
import Papervk from './Papervk';
import Tabvk from './Tabvk';
import TrendsForYou from './TrendsForYou';

const Stylea ={
	width: '100%'
}

const Styleb ={
	width: '50%'
}
class Search extends Component {
  render() {
    return (
	
	<MuiThemeProvider>
	<div className="topnav">
			<a className="active" href="#home">Home</a>
			<a href="#about">Notifications</a>
			<a href="#contact">Messages</a>
			<img src={Tbird} className="App-logo" alt="Twitter_bird_logo_2012" />
			<input type="text" placeholder="aadhar"/>
			<FlatButton label="TWEET" primary={true} />
		</div>
	<header className="Search-header">
           <h1 className="App-title">aadhar</h1>
        <div class="tab">
		<FlatButton label="Top	" />
	  <FlatButton label="Latest	" secondary={true} />
      <FlatButton label="People" />
	  <FlatButton label="Photos	" />
	  <FlatButton label="News" secondary={true} />
      <FlatButton label="Videos" />
	  <FlatButton label="Broadcasts" />
		</div>
		<div className="upperheader">
		<div className="SearchFiltertab">
		<FlatButton label="Search Filters." />
		<a href="Show">Show</a>
		</div>
		<div className="TopnewsCard">
		<Topnewscard />
		</div>
		<div className="RelatedArticletab">
		<FlatButton label="Related Articles" />
		<a href="ViewAll">ViewAll</a>
		<p>UPA govt was in the know of flaws in the knwo of Aadhar: Sawpan </p>
		</div>
		</div>
		</header>
	  </MuiThemeProvider>
    );
  }
}

export default Search;
