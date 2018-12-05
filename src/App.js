import React, { Component } from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import reducer from '../src/reducers';
import { createStackNavigator } from 'react-navigation'
import MainContainer from './containers/main'
import SingleChatroomContainer from './containers/SingleChatroom'
import PublicChatroomContainer from './containers/PublicChatroom'
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';

const AppNavigator = createStackNavigator({
  Home: MainContainer,
  SingleChatroom: SingleChatroomContainer,
  PublicChatroom: PublicChatroomContainer
}, {
    initialRouteName: 'Home'
  }
);

const navReducer = createNavigationReducer(AppNavigator);
const appReducer = combineReducers({
  nav: navReducer,
  chat: reducer
});

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const AppNav = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = (state) => ({
  state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(AppNav);
const store = createStore(
  appReducer,
  applyMiddleware(middleware, thunkMiddleware),
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}