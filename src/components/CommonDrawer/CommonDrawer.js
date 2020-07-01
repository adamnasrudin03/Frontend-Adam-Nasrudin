import React, {Component} from 'react';
import styles from './styles';
import {ImageBackground} from 'react-native';
import {
  Text,
  Container,
  Content,
  ListItem,
  Left,
  Icon,
  Body,
  Button,
} from 'native-base';

const items = [
  {
    icon: 'ios-contact',
    type: 'Ionicons',
    label: 'Profile',
    target: 'Profile',
  },
  {
    icon: 'contacts',
    type: 'AntDesign',
    label: 'Contacts',
    target: 'Contacts',
  },
];

function DrawerItems({navigation, item}) {
  return (
    <ListItem icon onPress={() => navigation.navigate(item.target)}>
      <Left>
        <Icon style={styles.icon} name={item.icon} type={item.type} />
      </Left>
      <Body>
        <Text>{item.label}</Text>
      </Body>
    </ListItem>
  );
}

class CommonDrawer extends Component {
  render() {
    const {navigation} = this.props;

    return (
      <Container>
        <Content>
          <ImageBackground
            source={require('../../assets/ilustration/contact-us-background.jpg')}
            style={styles.image}>
            <Text style={styles.textDrawer}>Welcome</Text>
          </ImageBackground>
          {items.map((item, index) => (
            <DrawerItems key={index} navigation={navigation} item={item} />
          ))}
        </Content>
      </Container>
    );
  }
}

export default CommonDrawer;
