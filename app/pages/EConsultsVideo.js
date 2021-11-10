import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Dimensions, Button, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { OT, OTSession, OTPublisher, OTSubscriber, OTSubscriberView } from 'opentok-react-native';
import EConsultsChat from './EConsultsChat';
import { Modal } from 'react-native';
import { Keyboard } from 'react-native';

/*
This import is only needed if we want to store API key, Session ID and Token in a separate config.js file.
import * as credentials from './config';
*/

import Icon from 'react-native-vector-icons/MaterialIcons';

const dimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const mainSubscribersResolution = {width: 1280, height: 720};
const secondarySubscribersResolution = {width: 352, height: 288};

class EConsultsVideo extends Component {
  constructor(props) {
    super(props);
    this.apiKey = '47344131';
    this.sessionId = '2_MX40NzM0NDEzMX5-MTYzNjUzMjA1MTE1M35jbnpMWGJPT1JuUXFxWC9pWGs3TENjMyt-fg';
    this.token = 'T1==cGFydG5lcl9pZD00NzM0NDEzMSZzaWc9ZDc3MjQ1MjdhNDk5MzQ0YThmYzFiYTJmMzY0YzkyNGJjMjZlNDQyNDpzZXNzaW9uX2lkPTJfTVg0ME56TTBOREV6TVg1LU1UWXpOalV6TWpBMU1URTFNMzVqYm5wTVdHSlBUMUp1VVhGeFdDOXBXR3MzVEVOak15dC1mZyZjcmVhdGVfdGltZT0xNjM2NTMyMTM1Jm5vbmNlPTAuMDAxNDY3MzUzOTgzMzI2NzU4JnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE2MzkxMjQxMzUmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=';
    this.state = {
      subscriberIds: [], // Array for storing subscribers
      localPublishAudio: true, // Local Audio state
      localPublishVideo: true, // Local Video state
      joinCall: false, // State variable for storing success
      streamProperties: {}, // Handle individual stream properties,
      mainSubscriberStreamId: null,
      showChat: false,
      isKeyboardVisible: false,
    };

    this.sessionEventHandlers = {
      streamCreated: (event) => {
        const streamProperties = {
          ...this.state.streamProperties,
          [event.streamId]: {
            subscribeToAudio: true,
            subscribeToVideo: true,
          },
        };
        this.setState({
          streamProperties,
          subscriberIds: [...this.state.subscriberIds, event.streamId],
        });
        console.log('streamCreated', this.state);
      },
      streamDestroyed: (event) => {
        const indexToRemove = this.state.subscriberIds.indexOf(event.streamId);
        const newSubscriberIds = this.state.subscriberIds;
        const streamProperties = {...this.state.streamProperties};
        if (indexToRemove !== -1) {
          delete streamProperties[event.streamId];
          newSubscriberIds.splice(indexToRemove, 1);
          this.setState({subscriberIds: newSubscriberIds});
        }
      },
      error: (error) => {
        console.log('session error:', error);
      },
      otrnError: (error) => {
        console.log('Session otrnError error:', error);
      },
      sessionDisconnected: () => {
        this.setState({
          streamProperties: {},
          subscriberIds: [],
        });
      },
    };

    this.publisherEventHandlers = {
      streamCreated: (event) => {
        console.log('Publisher stream created!', event);
      },
      streamDestroyed: (event) => {
        console.log('Publisher stream destroyed!', event);
      },
      audioLevel: (event) => {
        /* console.log('AudioLevel', typeof event); */
      },
    };

    this.subscriberEventHandlers = {
      connected: () => {
        console.log('[subscriberEventHandlers - connected]');
      },
      disconnected: () => {
        console.log('[subscriberEventHandlers - disconnected]');
      },
      error: (error) => {
        console.log('subscriberEventHandlers error:', error);
      },
    };

    this.publisherProperties = {
      cameraPosition: 'front',
    };
  }

  toggleAudio = () => {
    let publishAudio = this.state.localPublishAudio;
    this.publisherProperties = {
      ...this.publisherProperties,
      publishAudio: !publishAudio,
    };
    this.setState({
      localPublishAudio: !publishAudio,
    });
  };

  toggleVideo = () => {
    let publishVideo = this.state.localPublishVideo;
    this.publisherProperties = {
      ...this.publisherProperties,
      publishVideo: !publishVideo,
    };
    this.setState({
      localPublishVideo: !publishVideo,
    });
    console.log('Video toggle', this.publisherProperties);
  };

  //state to track for chat toggling
  toggleChat = () => {
    console.log('chat toggled');
    const {showChat} = this.state;
    this.setState({showChat: !showChat});
  };

  joinCall = () => {
    const {joinCall} = this.state;
    if (!joinCall) {
      this.setState({joinCall: true});
    }
  };

  endCall = () => {
    const {joinCall} = this.state;
    if (joinCall) {
      this.setState({joinCall: !joinCall});
    }
  };

  //states for keyboard hidding toggle ui
  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", this._keyboardDidShow);
    this.keyboardDIdHideListener = Keyboard.addListener("keyboardDidHide", this._keyboardDidHide);
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDIdHideListener.remove();
  }

  _keyboardDidShow = () => {
    this.setState({
      isKeyboardVisible: true
    });
  };

  _keyboardDidHide = () => {
    this.setState({
      isKeyboardVisible: false
    });
  };
  //end of state for keyboard hiding toggle ui

  /**
   * // todo check if the selected is a publisher. if so, return
   * @param {*} subscribers
   */
  handleSubscriberSelection = (subscribers, streamId) => {
    console.log('handleSubscriberSelection', streamId);
    let subscriberToSwap = subscribers.indexOf(streamId);
    let currentSubscribers = subscribers;
    let temp = currentSubscribers[subscriberToSwap];
    currentSubscribers[subscriberToSwap] = currentSubscribers[0];
    currentSubscribers[0] = temp;
    this.setState((prevState) => {
      const newStreamProps = {...prevState.streamProperties};
      for (let i = 0; i < currentSubscribers.length; i += 1) {
        if (i === 0) {
          newStreamProps[currentSubscribers[i]] = {
            ...prevState.streamProperties[currentSubscribers[i]],
          };
          newStreamProps[
            currentSubscribers[i]
          ].preferredResolution = mainSubscribersResolution;
        } else {
          newStreamProps[currentSubscribers[i]] = {
            ...prevState.streamProperties[currentSubscribers[i]],
          };
          newStreamProps[
            currentSubscribers[i]
          ].preferredResolution = secondarySubscribersResolution;
        }
      }
      console.log('mainSubscriberStreamId', streamId);
      console.log('streamProperties#2', newStreamProps);
      return {
        mainSubscriberStreamId: streamId,
        streamProperties: newStreamProps,
      };
    });
  };

  handleScrollEnd = (event, subscribers) => {
    console.log('handleScrollEnd', event.nativeEvent); // event.nativeEvent.contentOffset.x
    console.log('handleScrollEnd - events', event.target); // event.nativeEvent.contentOffset.x
    let firstVisibleIndex;
    if (
      event &&
      event.nativeEvent &&
      !isNaN(event.nativeEvent.contentOffset.x)
    ) {
      firstVisibleIndex = parseInt(
        event.nativeEvent.contentOffset.x / (dimensions.width / 2),
        10,
      );
      console.log('firstVisibleIndex', firstVisibleIndex);
    }
    this.setState((prevState) => {
      const newStreamProps = {...prevState.streamProperties};
      if (firstVisibleIndex !== undefined && !isNaN(firstVisibleIndex)) {
        for (let i = 0; i < subscribers.length; i += 1) {
          if (i === firstVisibleIndex || i === firstVisibleIndex + 1) {
            newStreamProps[subscribers[i]] = {
              ...prevState.streamProperties[subscribers[i]],
            };
            newStreamProps[subscribers[i]].subscribeToVideo = true;
          } else {
            newStreamProps[subscribers[i]] = {
              ...prevState.streamProperties[subscribers[i]],
            };
            newStreamProps[subscribers[i]].subscribeToVideo = false;
          }
        }
      }
      return {streamProperties: newStreamProps};
    });
  };

  renderSubscribers = (subscribers) => {
    console.log('renderSubscribers', subscribers);
    console.log('this.state.subscriberIds', this.state.subscriberIds);
    console.log(
      'this.state.mainSubscriberStreamId',
      this.state.mainSubscriberStreamId,
    );
    if (this.state.mainSubscriberStreamId) {
      subscribers = subscribers.filter(
        (sub) => sub !== this.state.mainSubscriberStreamId,
      );
      subscribers.unshift(this.state.mainSubscriberStreamId);
    }
    console.log('renderSubscribers - sorted', subscribers);
    return subscribers.length > 1 ? (
      <>
        <View style={styles.mainSubscriberStyle}>
          <TouchableOpacity
            onPress={() =>
              this.handleSubscriberSelection(subscribers, subscribers[0])
            }
            key={subscribers[0]}>
            <OTSubscriberView
              streamId={subscribers[0]}
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                zIndex: 0,
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.secondarySubscribers}>
          <ScrollView
            horizontal={true}
            decelerationRate={0}
            snapToInterval={dimensions.width / 2}
            snapToAlignment={'center'}
            onScrollEndDrag={(e) =>
              this.handleScrollEnd(e, subscribers.slice(1))
            }
            style={{
              width: dimensions.width,
              height: dimensions.height / 4,
            }}>
            {subscribers.slice(1).map((streamId) => (
              <TouchableOpacity
                onPress={() =>
                  this.handleSubscriberSelection(subscribers, streamId)
                }
                style={{
                  width: dimensions.width / 2,
                  height: dimensions.height / 4,
                }}
                key={streamId}>
                <OTSubscriberView
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    zIndex: 0,
                  }}
                  key={streamId}
                  streamId={streamId}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </>
    ) : subscribers.length > 0 ? (
      <TouchableOpacity style={styles.fullView}>
        <OTSubscriberView
          streamId={subscribers[0]}
          key={subscribers[0]}
          style={{width: '100%', height: '100%', position: 'absolute', zIndex: 0}}
        />
      </TouchableOpacity>
    ) : (
      <Text>No one connected</Text>
    );
  };

  videoView = () => {
    return (
      <>
        <View style={styles.fullView}>
          <OTSession
            apiKey={this.apiKey}
            sessionId={this.sessionId}
            token={this.token}
            eventHandlers={this.sessionEventHandlers}
            >
            <OTPublisher
              properties={this.publisherProperties}
              eventHandlers={this.publisherEventHandlers}
              style={styles.publisherStyle}
            />
            <OTSubscriber
              style={{height: dimensions.height, width: dimensions.width, position: 'absolute', zIndex: 0}}
              eventHandlers={this.subscriberEventHandlers}
              streamProperties={this.state.streamProperties}>
              {this.renderSubscribers}
            </OTSubscriber>
          </OTSession>
        </View>

        {/*Modal for EConsultChat toggling including toggle controls*/} 
        <Modal visible={this.state.showChat}>
          {/*Hiding/showing toggle controls on keyboard showing*/}
          {!this.state.isKeyboardVisible && (<View style={styles.buttonView}>
            <Icon.Button
              style={styles.iconStyle2}
              iconStyle={{ marginRight: 0 }}
              backgroundColor="#6c757d"
              name={this.state.localPublishAudio ? 'mic' : 'mic-off'}
              onPress={this.toggleAudio}
            />
            <Icon.Button
              style={styles.iconStyle2}
              iconStyle={{ marginRight: 0 }}
              backgroundColor="#ba181b"
              name="call-end"
              onPress ={() => this.props.navigation.navigate('EConsultCallEnd')}
            />
            <Icon.Button
              style={styles.iconStyle2}
              iconStyle={{ marginRight: 0 }}
              backgroundColor="#6c757d"
              name={this.state.localPublishVideo ? 'videocam' : 'videocam-off'}
              onPress={this.toggleVideo}
            />
            <Icon.Button
              style={styles.iconStyle2}
              iconStyle={{ marginRight: 0 }}
              backgroundColor="#6c757d"
              name={'chat-bubble'}
              onPress={this.toggleChat}
            />
          </View>)}
          {/*EconsultsChat as a modal, if else to remove gap after hidding toggle controls*/}
          <View  style={this.state.isKeyboardVisible ? styles.chatView : styles.shorterChat}>
            <EConsultsChat/>
          </View>
        </Modal>
        {/*End of EConsultChat toggling modal */}

        <View style={styles.buttonView}>
          <Icon.Button
            style={styles.iconStyle2}
            iconStyle={{ marginRight: 0 }}
            backgroundColor="#6c757d"
            name={this.state.localPublishAudio ? 'mic' : 'mic-off'}
            onPress={this.toggleAudio}
          />
          <Icon.Button
            style={styles.iconStyle2}
            iconStyle={{ marginRight: 0 }}
            backgroundColor="#ba181b"
            name="call-end"
            onPress={() => this.props.navigation.navigate('EConsultCallEnd')}
          />
          <Icon.Button
            style={styles.iconStyle2}
            iconStyle={{ marginRight: 0 }}
            backgroundColor="#6c757d"
            name={this.state.localPublishVideo ? 'videocam' : 'videocam-off'}
            onPress={this.toggleVideo}
          />
          <Icon.Button
            style={styles.iconStyle2}
            iconStyle={{ marginRight: 0 }}
            backgroundColor="#6c757d"
            name={'chat-bubble'}
            onPress={this.toggleChat}
          />
        </View>
      </>
    );
  };

  joinVideoCall = () => {
    return (
      <View style={styles.fullView}>
        <ImageBackground source={require('../backgrounds/zzECONSULTBG.png')} style={{height:'100%', width: '100%'}}>
        <Text style={styles.titleText}></Text>
          <View style={styles.overlayContainer}>
              <Text style={styles.title2Text}>Welcome!</Text>

              <View style={styles.mascotContainer}>
                  <Image source={require('../mascots/NuseLion.png')} style={{height: 250, width: 250, position: 'absolute', left: 40}}/>
              </View>

              <TouchableOpacity onPress={this.joinCall}>
                <Text style={styles.joinCallBtn}>Join Call</Text>
              </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  };

  render() {
    return this.state.joinCall ? this.videoView() : this.joinVideoCall();
  }
}

// Tweak styles here

const styles = StyleSheet.create({
  topcontainer: {
    flexGrow: 1,
    textAlign: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'green',
  },
  overlayContainer: {
    flexGrow: 1,
    textAlign: 'center',
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 25,
    marginLeft: '5%',
    marginTop: -50,
    marginBottom: 50,
  },
  titleText: {
    marginLeft: "7%",
    marginVertical: "5%",
    fontFamily: 'Roboto-Medium',
    fontSize: 28,
  },
  title2Text: {
    textAlign: 'center',
    marginTop: "10%",
    marginBottom: '5%',
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
  },
  mascotContainer: {
       width: '85%',
       height: '30%',
       marginTop: 15,
       marginLeft: 30,
       marginBottom: 15,
       justifyContent: 'center',
  },
  joinCallBtn: {
      backgroundColor: '#f6ce87',
      color: 'black',
      width: "50%",
      height: 70,
      borderRadius: 35,
      textAlign: 'center',
      justifyContent: 'center',
      paddingVertical: 20,
      fontSize:  18,
      fontFamily: 'Quicksand-Bold',
      marginTop: "15%",
      marginBottom: "5%",
      marginLeft: "25%",
  },
  buttonView: {
    height: 50,
    backgroundColor: '#ced4da', //'#131415' Vonage Black
    display: 'flex',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
  },
  iconStyle2: {
    paddingLeft: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  fullView: {
    flex: 1,
  },
  scrollView: {
    // backgroundColor: Colors.lighter,
  },
  footer: {
    // color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  publisherStyle: {
    width: 100,
    height: 150,
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 10,
  },
  mainSubscriberStyle: {
    height: (dimensions.height * 3) / 4 - 50,
  },
  secondarySubscribers: {
    height: dimensions.height / 4,
  },
  //next 2 styles is for the chat toggling keyboards
  chatView: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    alignSelf: 'center',
    top: 0,
  },
  shorterChat: {
    paddingBottom: 50,
    height: '100%',
    width: '100%',
    position: 'absolute',
    alignSelf: 'center',
    top: 0,
  },
});

export default EConsultsVideo;