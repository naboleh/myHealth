import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';

export default function BodyModel() {
		return(
			<View style={styles.container}>
				<Image style={{width:'100%', height:'100%'}}
					source={require('../icon/bodymodel.png')}/>
			</View>
		)
}

const styles = StyleSheet.create({
	container: {
	justifyContent: 'flex-end',
	alignItems: 'center',
	marginTop: -30
	}
});

