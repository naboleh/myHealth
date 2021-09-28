import React from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class MainPageItem extends React.Component{
    render() {
        return(
            <View style={styles.MainPageItem}>
                <Image
                source={this.props.itemImage}
                style={styles.image} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainPageItem: {
        width: 150,
        height: 150,
        padding: 50,
        alignItems: 'center',
        margin: 10
    },
    image: {
        backgroundColor: "#e6fff9",
        width: 155,
        height: 135,
        margin: 1,
        borderRadius: 15,
        alignItems: 'center',
        padding: 7,
    }
});