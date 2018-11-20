import React, { Component }  from 'react'
import {createStackNavigator} from 'react-navigation'
import MainContainer from './container/mainContainer'
import ChatroomPage from './component/chatroomPage'


const RootStack = createStackNavigator({
  Home: MainContainer,
  Chatroom: ChatroomPage,
},{
  initialRouteName:'Home'
}
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}