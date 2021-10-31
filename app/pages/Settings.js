import React from 'react';
import {ListItem, Icon} from 'react-native-elements';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

const accountlist = [
  {
    title: 'Your Profile',
    icon: 'person',
  },
  {
    title: 'Manage Family Members',
    icon: 'groups',
  },
  {
    title: 'Change Language',
    icon: 'language',
  },
];

const otherlist = [
  {
    title: 'Help',
    icon: 'info',
  },
  {
    title: 'Report Vulnerability',
    icon: 'bug-report',
  },
  {
    title: 'Submit Error Logs',
    icon: 'outlined-flag',
  },
];

export default function Settings({navigation}) {
  return (
    <View>
      <Text style={styles.titleText}>Settings</Text>
      <Text style={styles.title2Text}>Account {"\n"}</Text>
      <View>
        {accountlist.map((item, i) => (
          <ListItem key={i} bottomDivider>
            <Icon name={item.icon} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))}
      </View>

      <Text style={styles.title2Text}>Help & Feedback {"\n"}</Text>
      <View>
        {otherlist.map((item, i) => (
          <ListItem key={i} bottomDivider>
            <Icon name={item.icon} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#35363a',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  titleText: {
    marginLeft: '5%',
    marginTop: '7%',
    fontFamily: 'Roboto-Medium',
    fontSize: 28,
  },

  title2Text: {
    marginLeft: '5%',
    marginTop: '5%',
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
  },
});
