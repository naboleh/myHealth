import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import React from 'react';

import Dimensions from '../utils/dimensions';
const {height, width} = Dimensions.get('window');

const MARGIN_WIDTH = Dimensions.size['2'];
const ITEM_WIDTH = (width - Dimensions.size['10'] - MARGIN_WIDTH * 10) / 4;

//images
const img2 = {
  uri: 'https://1.bp.blogspot.com/-Adxg5Zfj9sI/XtxD1pS9jUI/AAAAAAABZU8/G_UHPS7HCJ8Ve5lWiPL2sDmhYJ_nHZ5iQCNcBGAsYHQ/s1600/food_cauliflower_rice.png',
};
const img4 = {
  uri: 'https://1.bp.blogspot.com/-zNmXId_Nd-Y/Wfg1VZVLrGI/AAAAAAABH5k/zGgPrP2TniUzlA-z-HRTHzre-mcFPmz6wCLcBGAs/s800/sweets_pound_cake.png',
};
const img8 = {
  uri: 'https://1.bp.blogspot.com/-DMxyMJ7K9dM/XvcI9IiIWkI/AAAAAAABZu0/jvnzKF9fMBYn94-qqYRqyed7ea7shgy4gCNcBGAsYHQ/s1600/vegetable_mini_tomato_aiko.png',
};
const img16 = {
  uri: 'https://3.bp.blogspot.com/-G1ifYdmZovs/VGX8rlfei2I/AAAAAAAApK8/OdkKfCy4YJk/s800/vegetable_sunny_lettuce.png',
};
const img32 = {
  uri: 'https://4.bp.blogspot.com/-uY6ko43-ABE/VD3RiIglszI/AAAAAAAAoEA/kI39usefO44/s800/fruit_ringo.png',
};
const img64 = {
  uri: 'https://3.bp.blogspot.com/-Fa6AIKVnh1c/VVGVbTWRGkI/AAAAAAAAtlY/MlG36yqDSxw/s800/food_vegetable_sald.png',
};
const img128 = {
  uri: 'https://1.bp.blogspot.com/--Z0FQl8l9sU/UbVvQV3OinI/AAAAAAAAUtE/XpDlhdqZxaY/s800/fruits_basket.png',
};
const img256 = {
  uri: 'https://3.bp.blogspot.com/-xpkABU32UmM/W5i2RU0J0sI/AAAAAAABO1s/TeQHblC92lsmJm0YQtkZdUzLSTGR-ayAACLcBGAs/s800/drink_milk_pack.png',
};
const img512 = {
  uri: 'https://1.bp.blogspot.com/-iNgeH_788Xg/XkZc3IM0EHI/AAAAAAABXQo/-KKL7UOBQZ49XORoXf8F90U9H5v2iJv3wCNcBGAsYHQ/s1600/food_niku_yakiniku_set.png',
};
const img1024 = {
  uri: 'https://3.bp.blogspot.com/-5jDdSI5jPLQ/Vq89Q9xcuwI/AAAAAAAA3p8/INHomZs7H04/s800/sashimi_aji.png',
};
const img2048 = {
  uri: 'https://2.bp.blogspot.com/-Ev8KH-YDMZU/Ur1GEXfoyjI/AAAAAAAAcWk/QH3_QamN5Jc/s800/honey_toast.png',
};
const imgsuper = {
  uri: 'https://4.bp.blogspot.com/-tOgRtxA5cKU/XJB4zqSgkEI/AAAAAAABR6M/3ORq-W1sRqMRYlp3wSRv7t_lhw2HnJYAACLcBGAs/s800/drink_tapioca_green.png',
};

const styles = StyleSheet.create({
  tile: {
    position: 'absolute',
    borderRadius: Dimensions.size['1'],
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tileText: {
    fontSize: Dimensions.size['5'],
    color: '#776E65',
    marginLeft: 5,
    marginTop: 3,
    alignSelf: 'flex-start',
    flex: 1,
  },
  tile2: {
    backgroundColor: '#eee4da',
  },
  tile4: {
    backgroundColor: '#eee1c9',
  },
  tile8: {
    backgroundColor: '#f3b27a',
  },
  tile8Text: {
    color: '#f9f6f2',
  },
  tile16: {
    backgroundColor: '#f69664',
  },
  tile16Text: {
    color: '#f9f6f2',
  },
  tile32: {
    backgroundColor: '#f77c5f',
  },
  tile32Text: {
    color: '#f9f6f2',
    marginTop: Dimensions.size['2'],
  },
  tile64: {
    backgroundColor: '#f75f3b',
  },
  tile64Text: {
    color: '#f9f6f2',
  },
  tile128: {
    backgroundColor: '#edd073',
  },
  tile128Text: {
    color: '#f9f6f2',
    fontSize: Dimensions.size['5'],
  },
  tile256: {
    backgroundColor: '#edcc62',
  },
  tile256Text: {
    color: '#f9f6f2',
    fontSize: Dimensions.size['5'],
  },
  tile512: {
    backgroundColor: '#edc950',
  },
  tile512Text: {
    color: '#f9f6f2',
    fontSize: Dimensions.size['5'],
  },
  tile1024: {
    backgroundColor: '#edc53f',
  },
  tile1024Text: {
    color: '#f9f6f2',
    fontSize: Dimensions.size['5'],
  },
  tile2048: {
    backgroundColor: '#edc22e',
  },
  tile2048Text: {
    color: '#f9f6f2',
    fontSize: Dimensions.size['5'],
  },
  tilesuper: {
    backgroundColor: '#3c3a33',
    fontSize: Dimensions.size['5'],
  },
  tilesuperText: {
    color: '#f9f6f2',
  },
});

const Tile = props => {
  const tileStyle =
    props.value <= 2048 ? styles['tile' + props.value] : styles['tilesuper'];
  const tilePositionStyle = {
    left: props.x * (ITEM_WIDTH + MARGIN_WIDTH * 2) + MARGIN_WIDTH * 2,
    top: props.y * (ITEM_WIDTH + MARGIN_WIDTH * 2) + MARGIN_WIDTH * 2,
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
  };
  const tileTextStyle =
    props.value <= 2048
      ? styles['tile' + props.value + 'Text']
      : styles['tilesuperText'];

  let tileBg = img2;
  switch (props.value) {
    case 2:
      break;
    case 4:
      tileBg = img4;
      break;
    case 8:
      tileBg = img8;
      break;
    case 16:
      tileBg = img16;
      break;
    case 32:
      tileBg = img32;
      break;
    case 64:
      tileBg = img64;
      break;
    case 128:
      tileBg = img128;
      break;
    case 256:
      tileBg = img256;
      break;
    case 512:
      tileBg = img512;
      break;
    case 1024:
      tileBg = img1024;
      break;
    case 2048:
      tileBg = img2048;
      break;
    default:
      tileBg = imgsuper;
  }

  /* test
  return (
    <View style={[styles.tile, tileStyle, tilePositionStyle]}>
      <ImageBackground source={tileBg} resizeMode="contain" style={{flex: 1}}>
        <Text style={[styles.tileText, tileTextStyle]}>{props.value}</Text>
      </ImageBackground>
    </View>
  );
  */

  return (
    <View style={[styles.tile, tileStyle, tilePositionStyle]}>
      <Text style={[styles.tileText, tileTextStyle]}>{props.value}</Text>
      <View
        style={{
          width: '75%',
          height: '75%',
          alignSelf: 'flex-end',
          position: 'absolute',
          left: 19,
          bottom: 5,
        }}>
        <Image source={tileBg} resizeMode="contain" style={{flex: 1}}></Image>
      </View>
    </View>
  );
};

export default Tile;
