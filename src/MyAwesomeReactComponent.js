import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const Stylea ={
	width: '100%'
}

const MyAwesomeReactComponent = () => (
  <div style={Stylea}className="MyAwesomeReactComponent">
    <TextField
      hintText="What's happening??"
    />
	<RaisedButton label="Tweet" />
  </div>
  
);


export default MyAwesomeReactComponent;