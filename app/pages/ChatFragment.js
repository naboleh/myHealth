import React, { Component } from 'react';
import { View, Button, TextInput, StyleSheet, FlatList, Text, Image, TouchableHighlight, LogBox, TouchableOpacity } from 'react-native';
import { OTSession } from 'opentok-react-native';
import { placeholder } from '@babel/types';
import { Colors } from 'react-native/Libraries/NewAppScreen';

//LogBox.ignoreAllLogs();

class ChatFragment extends Component {
    constructor(props) {
      super(props);
      this.apiKey = '47339051';
      this.sessionId = '2_MX40NzMzOTA1MX5-MTYzMjA1OTY0OTIxMX5rM1VUdU4rcmg0ZGR0WmRlUjVXODBoOEZ-fg';
      this.token = 'T1==cGFydG5lcl9pZD00NzMzOTA1MSZzaWc9MjI0MTk2NDYyZjQ4ZmY5NWFlN2IxNzQwZTNmOGJhNjM3MGU0YTUwNzpzZXNzaW9uX2lkPTJfTVg0ME56TXpPVEExTVg1LU1UWXpNakExT1RZME9USXhNWDVyTTFWVWRVNHJjbWcwWkdSMFdtUmxValZYT0RCb09FWi1mZyZjcmVhdGVfdGltZT0xNjMyMDU5Nzc4Jm5vbmNlPTAuNjI2MzI0MDMzNTA5NTIxNyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjM0NjUxNzc4JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9';
      this.state = {
        signal: {
          data: '',
          type: '',
        },
        text: '',
        messages: [],
      };
      
      this.sessionEventHandlers = {
        signal: (event) => {
          if (event.data) {
            const myConnectionId = this.session.getSessionInfo().connection.connectionId;
            const oldMessages = this.state.messages;
            // type = 0 refers to message by me, 1 refers to message by others
            const messages = (event.connectionId === myConnectionId) ? [...oldMessages, {data: `Me: ${event.data}`, type: 0}] : [...oldMessages, {data: `Other: ${event.data}`, type: 1}];
            this.setState({
              messages,
            });
          }
        },
      };
    }
  
    sendSignal() {
      if (this.state.text) {
        this.setState({
          signal: {
            type: '',
            data: this.state.text,
          },
          text: '',
        });
      }
    }
  
    //functions declaration using arrow function
    //name of function = (parameters) => return value;
    _keyExtractor = (item, index) => index;
    //{} declares an object
    //object is similar to an array but instead of indexing using numbers,
    //object use property names
    //property is declared in and object using ':' like this
    //e.g. const obj = {name:"abc", age:"14"}
    _renderItem = ({item}) => {
      if(item.type == 0){
        return(
          //text bubble design here
          <View style={[styles.balloon, {backgroundColor: '#1084ff', alignSelf: "flex-end"}]}>
              <Text style={{paddingTop: 5, color: 'white'}}>
                  {item.data}
              </Text>
          </View>
        )
      } else {
        return(
          //text bubble design here
          <View style={[styles.balloon, {backgroundColor: '#dedede'}]}>
              <Text style={{paddingTop: 5, color: '#000000'}}>
                  {item.data}
              </Text>
          </View>
        )
      }
    }
  
    render() {
      return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                {/*Havent added a onPress event for the close button*/}
                <TouchableOpacity onPress={() => {}} style={{position: 'absolute', left: 0 }}>
                    <Image 
                    source={require('../icon/close-x.png')}
                    style={styles.closeButton}
                    />
                </TouchableOpacity>
                <Text style={styles.mainText}> Dr. Stephen Strange </Text>
            </View>
            <OTSession 
                apiKey={this.apiKey}
                sessionId={this.sessionId}
                token={this.token}
                signal={this.state.signal}
                eventHandlers={this.sessionEventHandlers}
                ref={(instance) => {
                this.session = instance;
                }}
            />

            <FlatList
                data={this.state.messages}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
            />
            <View style={styles.chatboxContainer}>
                <TextInput
                    style={styles.chatBox}
                    onChangeText={(text) => { this.setState({ text }); }}
                    value={this.state.text}
                    multiline={true}
                    placeholder="Type a message"
                    placeholderTextColor="white"
                />

                <TouchableOpacity onPress={() => { this.sendSignal(); }}>
                    <Image 
                    source={require('../icon/send-circle.png')}
                    style={styles.button}
                    />
                </TouchableOpacity>
            </View>

        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    mainText: {
        fontSize: 17,
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center' 
    },
    topBar: {
        backgroundColor: "#CED2D9", 
        flexDirection: 'row', 
        alignItems:'center', 
        justifyContent:'center'  
    },
    chatboxContainer: {
        flexDirection: 'row',
        marginBottom: 5,
        minHeight: 50
    },
    chatBox:{
        height: 'auto',
        width: '85%',
        marginLeft: 7,
        backgroundColor: '#40444a',
        color: 'white',
        fontSize: 17
    },
    button:{
        marginLeft: 3
    },
    closeButton: {
        flex: 1,
        width: 35,
        height: 35,
        marginLeft: 7,
        resizeMode: 'contain' },

    itemIn: {
        marginLeft: 10
    },
    itemOut: {
       alignSelf: 'flex-end',
       marginRight: 10
    },
    balloon: {
       maxWidth: '60%',
       paddingHorizontal: 15,
       paddingTop: 10,
       paddingBottom: 15,
       borderRadius: 20,
       alignSelf:'baseline',
       marginTop: 8,
       marginLeft: 10,
       marginRight: 10
    },
  })

  export default ChatFragment;