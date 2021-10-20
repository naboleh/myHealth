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
        }, 2000); //in milisecs, change this to change delay
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
            msg = <Image source={require('../icon/incomingalert.png')} style={styles.alertImg}/>;
        }
        return (
            msg
        )
    }
}
//change the position of the image here
const styles = StyleSheet.create({
    alertImg: {
        height: 70,
        width: 350,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        marginLeft: '6.5%',
        marginTop: '-30%',
    },
});

export default DelayIncomingCalls;