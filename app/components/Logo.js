import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
} from 'react-native';

export default function Logo() {
		return(
			<View style={styles.container}>
				<Image style={{width:150, height:60}}
					source={require('../icon/logo.png')}/>
				<Text style={styles.logoText}>Your one-stop to health.</Text>
			</View>
		)
	}

const styles = StyleSheet.create({
	container: {
	flexGrow: 1,
	justifyContent: 'flex-end',
	alignItems: 'center'
	},
	logoText: {
	marginVertical: 15,
	fontFamily: 'Quicksand-Medium',
	fontSize: 18,
	color: 'rgba(0,0,0,0.7)'
	}
});