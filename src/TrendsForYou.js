import React from 'react';

import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

const TrendsForYou = () => (
  <div>
    <List>
      <ListItem primaryText="#MumbaiPolice(34k Tweets)" rightIcon={<ActionInfo />} />
      <ListItem primaryText="#IMAD(56k Tweets)" rightIcon={<ActionInfo />} />
      <ListItem primaryText="#LuxGoldenRoseAwards(23k Tweets)" rightIcon={<ActionInfo />} />
      <ListItem primaryText="#TEDTalks(82k Tweets)" rightIcon={<ActionInfo />} />
    </List>
  </div>
);

export default TrendsForYou;