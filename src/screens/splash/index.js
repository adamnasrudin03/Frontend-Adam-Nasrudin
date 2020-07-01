import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Text, View} from 'native-base';
import {ILLogoDark} from '../../assets';
import {colors, fonts} from '../../utils';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {navigation} = this.props;
    setTimeout(() => {
      navigation.replace('Main');
    }, 3000);
  }
  render() {
    return (
      <Container>
        <View style={styles.page}>
          <ILLogoDark />
          <Text style={styles.title}>My Contact</Text>
        </View>
      </Container>
    );
  }
}

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 20,
  },
});
