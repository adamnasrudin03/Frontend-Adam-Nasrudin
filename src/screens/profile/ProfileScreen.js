import React, {Component} from 'react';
import {Container, Text, Button, Form, Item, Input, Label} from 'native-base';

import {CommonHeader} from '../../components/CommonHeader';
import styles from './styles';
import {ILNullPhoto} from '../../assets';
import {View} from 'react-native';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
    };
  }

  render() {
    const {navigation} = this.props;

    return (
      <Container>
        <CommonHeader navigation={navigation} title="Profile" />

        <View style={styles.page}>
          <View style={styles.content}>
            <View style={styles.container}>
              <View style={styles.borderProfile}>
                <ILNullPhoto style={styles.avatar} />
              </View>
            </View>

            <Form>
              <View style={styles.text}>
                <Item floatingLabel>
                  <Label>First Name</Label>
                  <Input style={styles.input} value={'Adam'} />
                </Item>

                <Item floatingLabel>
                  <Label>Last Name</Label>
                  <Input style={styles.input} value={'Nasrudin'} />
                </Item>
              </View>
              <View>
                <Button style={styles.button} full onPress={this.onSubmit}>
                  <Text>Save</Text>
                </Button>
              </View>
            </Form>
          </View>
        </View>
      </Container>
    );
  }
}

export default ProfileScreen;
