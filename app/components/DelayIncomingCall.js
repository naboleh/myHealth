import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    Image,
    ScrollView,
  } from 'react-native';

class DelayIncomingCalls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
    }
    //delay timer
    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState((state) => ({show: true}));
        }, 100000); //in milisecs, change this to change delay
    }
    //clearing timer
    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    //outputs
    render() {
        let msg = false;
        if (this.state.show) { //so by default when timer not 0 is false, after timeout, state becomes true
            //if true update the contents to be displayed
            msg = <Image source={require('../icon/incomingcall.png')} style={styles.alertImg}/>;
        }
        return (
            msg
        )
    }
}
//change the position of the image here
const styles = StyleSheet.create({
    alertImg: {
        height: 520,
        width: 300,
        backgroundColor: '#444444',
        opacity: 0.9,
        borderRadius: 25,
        marginTop:'10%',
        marginLeft: '15%',

    },
});

export default DelayIncomingCalls;