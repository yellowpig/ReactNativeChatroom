/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, ListView, Image } from 'react-native';
import CoverageCell from '../component/coverageCell';
import { getMetaData } from '../api/index';
import io from '../util/socket.io/socket.io'

var _this = null;
_this = {
  data: {
    myId: 0,
    myName: "",
    myUserName: "",
    myself: {},
    users: [],
    groups: [],
    userMap: {},
    groupMap: {},
    groupIds: "",
    socket: null,
    url: ""
  }
}

// @TODO 用的模拟数据。fetch数据需要先登陆
// result:元数据
var result = getMetaData('/profile/getMetaData')
_this.data.myId = result.data.myId;
_this.data.myName = result.data.myName;
_this.data.myUserName = result.data.myUserName;
_this.data.myself = result.data.userMap[result.data.myId];
_this.data.users = result.data.users;
_this.data.groups = result.data.groups;
_this.data.userMap = result.data.userMap;
_this.data.groupMap = result.data.groupMap;
_this.data.groupIds = result.data.groupIds;
_this.data.url = result.data.url;

// CoverageArrs:处理后传入组件的数据
var CoverageArrs = [{
  title: 'Friends', persons: _this.data.users,chatType:'user'
}, {
  title: 'Groups', persons: _this.data.groups,chatType:'group'
}]

export default class MainContainer extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(CoverageArrs),
    };
  }
  detail(title) {
  }

  renderMover(data) {
    const { title, persons,chatType } = data;
    return (
      <CoverageCell title={title} cars={persons} chatType={chatType} detail={this.detail.bind(this)} navigation={this.props.navigation} />
    )
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.profile}>
          <View style={{ height: 100, margin: 10, flex: 1, flexDirection: 'row' }}>
            <Image style={{ height: 70, width: 70, borderRadius: 35, backgroundColor: '#dcdcdc', paddingVertical: 3 }} source={require('../image/user2-128x128.jpg')} />
            <View style={{ flex: 1, marginHorizontal: 15, paddingTop: 5, justifyContent: 'space-around' }}>
              <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>mary</Text>
              </View>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ backgroundColor: 'green', borderRadius: 7, height: 14, width: 14 }}>
                </View>
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 18, color: 'white' }}>Online</Text>
                </View>
              </View>
            </View>
          </View>
          {/* <View style={{ backgroundColor: 'rgb(58,72,79)', margin: 15, borderRadius: 5, height: 50 }}>
          </View> 搜索框 */}
        </View>
        <View style={styles.chatlist}>
          <View style={{ height: 25 }}>
          </View>
          <View style={{ flex: 1 }}>
            <ListView style={{ flex: 1 }} dataSource={this.state.dataSource} renderRow={this.renderMover.bind(this)} />
          </View>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(36,45,49)',
    paddingTop: 20
  },
  profile: {
    height: 100
  },
  chatlist: {
    backgroundColor: 'rgb(27,34,38)',
    height: 800
  }
});
