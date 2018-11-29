import React, { Component }  from 'react'
import {createStackNavigator} from 'react-navigation'
import MainContainer from './containers/main'
import ChatroomContainer from './containers/chatroom'


const RootStack = createStackNavigator({
  Home: MainContainer,
  Chatroom: ChatroomContainer,
},{
  initialRouteName:'Home'
}
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}