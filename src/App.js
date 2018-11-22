import React, { Component }  from 'react'
import {createStackNavigator} from 'react-navigation'
import MainContainer from './container/main'
import ChatroomContainer from './container/chatroom'


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