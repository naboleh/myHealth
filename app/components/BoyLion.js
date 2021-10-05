import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';

export default function BoyLion() {
		return(
			<View style={styles.container}>
				<Image style={{width:'150%', height:'120%'}}
					source={require('../mascots/boylion.png')}/>
			</View>
		)
}

const styles = StyleSheet.create({
	container: {
	flexGrow: 1,
	marginTop: '10%',
	justifyContent: 'space-around',
	alignItems: 'flex-end'
	}
});

