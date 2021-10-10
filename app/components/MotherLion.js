import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';

export default function MotherLion() {
		return(
			<View style={styles.container}>
				<Image style={{width:'100%', height:'110%'}}
					source={require('../mascots/MotherLion.png')}/>
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

