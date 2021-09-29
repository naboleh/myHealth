import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';

export default function FatherLion() {
		return(
			<View style={styles.container}>
				<Image style={{width:250, height:250}}
					source={require('../mascots/fatherlion.gif')}/>
			</View>
		)
}

const styles = StyleSheet.create({
	container: {
	flexGrow: 1,
	justifyContent: 'flex-end',
	alignItems: 'center'
	}
});

