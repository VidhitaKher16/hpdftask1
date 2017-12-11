import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';


const Tabvk = () => (
<div>
  <Tabs>
    <Tab
      icon={<FontIcon className="muidocs-icon-action-home">home</FontIcon>}
      label="HOME"
    />
    <Tab
      icon={<FontIcon className="material-icons">favorite</FontIcon>}
      label="NOTIFICATIONS"
    />
    <Tab
      icon={<MapsPersonPin />}
      label="MESSGAES"
    />
  </Tabs>
  </div>
);

export default Tabvk;
