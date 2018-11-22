import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default class ChatroomPage extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('showName', 'unknown'), //聊天对象名
    });

    render() {
        var chatType=this.props.navigation.getParam('chatType', 'unknown')
        var chatWithId=this.props.navigation.getParam('chatWithId', 0)
        var showName=this.props.navigation.getParam('showName', 'unknown')

        return (
            <View style={styles.container}>
                <View style={{position:'absolute',top:10,left:10,width:150}}>
                    <Text style={{color:'rgb(128,128,128)',fontSize:13,fontWeight:'normal'}}>11-16 17:30 PM</Text>
                    <View style={{marginTop:5,height:40,borderRadius:5,backgroundColor:'white',paddingLeft:10}}>
                        <Text style={{lineHeight:40}}>Hello World!{chatType}</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <View style={styles.textInput}>
                        <View style={{flex:4,borderStyle:'solid',borderColor:'rgb(203,205,208)',borderWidth:1}}>
                            <TextInput/>
                        </View>
                        <View style={styles.sendBtn}>
                            <Text style={{color:'white',height:30,alignItems:'center',lineHeight:40}}>Send</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
};

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    footer:{
        flex:1,
        height:60,
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        backgroundColor:'white',
    },
    textInput:{
        flex:1,
        margin:10,
        flexDirection:'row'
    },
    sendBtn:{
        flex:1,
        height:40,
        backgroundColor:'rgb(80,140,184)',
        textAlign:'center',
        alignItems:'center'
    }
});