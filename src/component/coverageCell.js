import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Button } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";

export default class CoverageCell extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isShow: false,
        };
    }

    detail = (title) => {
        this.setState({
            isShow: !this.state.isShow
        });
        this.props.detail(title);
    }

    static defaultProps = {
        title: '',
        cars: []
    }

    isShowText() {
        //for是ES5语法，而且此方法无法获得每一行的索引
        //故改用map
        const { title, cars } = this.props
        var allChild = []
        for (var i = 0; i < cars.length; i++) {
            allChild.push(
                <TouchableOpacity onPress={() =>
                    this.props.navigation.navigate('Chatroom', {
                        name: i,
                    })
                }>
                    <View style={styles.chatItem}>
                        <View style={{ height: 20, width: 20, backgroundColor: 'red' }}></View>
                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={{ fontSize: 20, color: 'rgb(143,163,174)' }}>{cars[i].name}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }
        return allChild
    }

    render() {
        const { title, cars } = this.props
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => { this.detail(title) }}>
                    <View style={styles.chatBlock}>
                        <View style={{ height: 20, width: 20}}>
                            <Icon name="md-mail" size={20} color='rgb(173,185,191)'/>
                        </View>
                        <View style={{ marginHorizontal: 10, flex: 3 }}>
                            <Text style={{ fontSize: 20, color: 'rgb(173,185,191)' }}>{title}</Text>
                        </View>
                        <View style={styles.tip}>
                            <Text style={styles.tipText}>3</Text>
                        </View>
                        {/* <View style={{ backgroundColor: this.state.isShow ? 'red' : 'green', height: 15, width: 15 }}></View> */}
                    </View>
                </TouchableOpacity>
                {/* {this.state.isShow ? <View>{this.isShowText()}</View> : <View></View>} */}
                {this.state.isShow ? <View>{
                    cars.map((car, index) =>
                        <TouchableOpacity key={index} onPress={() =>
                            this.props.navigation.navigate('Chatroom', {
                                name: cars[index].name,
                            })
                        }>
                            <View style={styles.chatItem}>
                                <View style={{ height: 20, width: 20}}>
                                    <Icon name="md-radio-button-off" size={20} color='rgb(222,87,66)'/>
                                </View>
                                <View style={{ marginHorizontal: 10 }}>
                                    <Text style={{ fontSize: 20, color: 'rgb(143,163,174)' }}>{cars[index].name}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }
                </View> : <View></View>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    chatBlock: {
        flexDirection: 'row',
        backgroundColor: 'rgb(36,45,49)',
        paddingHorizontal: 25,
        paddingVertical: 20,
        height: 60,
        alignItems: 'center'
    },
    tip: {
        height: 20,
        width: 20,
        backgroundColor: 'rgb(205,85,66)',
        borderRadius: 5
    },
    tipText: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    chatItem: {
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor: 'rgb(47,59,64)',
        height: 50,
        paddingHorizontal: 25,
        paddingVertical: 10
    }
});