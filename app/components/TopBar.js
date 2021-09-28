import React from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class TopBar extends React.Component{
    render() {
        return(
            <View style={styles.TopItem}>
                <Image
                source={this.props.imageTop}  />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    TopItem: {
        alignSelf: 'center',
        width: 10,
        height: 10,
    },
    imageTop: {
        width: 155,
        height: 135,
        margin: 1,
        borderRadius: 15,
        alignItems: 'center',
        padding: 7,
    }
});