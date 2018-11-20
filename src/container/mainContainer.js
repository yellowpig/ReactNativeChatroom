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

var CoverageArrs = [{
  title: 'Friends', persons: [
    { name: 'sumory.wu', id: '201' },
    { name: 'felix', id: '202' },
    { name: 'mary', id: '204' },
  ]
}, {
  title: 'Groups', persons: [
    { name: 'IM讨论小组', id: '160' },
    { name: 'Gru使用讨论', id: '180' },
    { name: '测试群组', id: '190' },
  ]
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
    const { title, persons } = data;
    return (
      <CoverageCell title={title} cars={persons} detail={this.detail.bind(this)} navigation={this.props.navigation} />
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
