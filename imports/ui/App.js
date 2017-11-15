import React from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

export default class App extends React.Component {
  render() {
    return (
      <div>
        {/*Render h1 tag with title var as text*/}
        <TitleBar title={this.props.title} subtitle='Created by Misiu'/>
        <div className='wrapper'>
          <PlayerList playerList={this.props.playerList}/>
          <AddPlayer/>
        </div>
      </div>
    );
  }
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  playerList: PropTypes.array.isRequired
};
