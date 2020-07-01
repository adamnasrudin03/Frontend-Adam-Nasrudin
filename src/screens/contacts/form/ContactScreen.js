import React, {Component} from 'react';
import {
  Button,
  Content,
  Container,
  Form,
  Item,
  Input,
  Label,
  Text,
  Thumbnail,
  View,
} from 'native-base';
import {CommonHeader} from '../../../components/CommonHeader';
import {showError} from '../../../utils/toast';
import styles from './styles';
import {connect} from 'react-redux';
import {save, findById} from '../../../action/contact';

class ContactScreen extends Component {
  constructor(props) {
    super(props);

    const {route} = this.props;
    this.state = {
      id: route.params?.id,
      firstName: '',
      lastName: '',
      age: 0,
    };
  }

  componentDidMount() {
    const {id} = this.state;
    if (id) {
      this.props.findById(this.state.id);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const {data, error, saveError, saveData, navigation} = this.props;

    if (prevProps.data !== data) {
      this.setState({...data});
    } else if (saveData && prevProps.saveData !== saveData) {
      navigation.navigate('Contacts');
    } else if (error && prevProps.error !== error) {
      showError(error);
    } else if (saveError && prevProps.saveError !== saveError) {
      showError(saveError);
    }
  }

  onChange = (name, value) => {
    this.setState({[name]: value});
  };
  onSubmit = () => {
    this.props.save(this.state);
  };
  render() {
    const {navigation, loading, saveError} = this.props;
    const {id, firstName, lastName, age, photo} = this.state;
    const errorData = saveError?.data;
    const Image = () => {
      if (photo === 'N/A') {
        return (
          <Thumbnail
            source={{
              uri:
                'https://www1.nyc.gov/assets/nycha/images/content/pages/contact-in-person.png',
            }}
          />
        );
      } else {
        return <Thumbnail source={{uri: photo}} />;
      }
    };
    return (
      <Container>
        <CommonHeader navigation={navigation} title="Contact Detail" />

        <Content style={styles.content}>
          <Form>
            <View style={styles.container}>
              <View style={styles.borderProfile}>
                <Image />
              </View>

              {id && (
                <Item floatingLabel>
                  <Label>ID</Label>
                  <Input style={styles.input} disabled value={id.toString()} />
                </Item>
              )}
              <Item floatingLabel error={errorData?.name != null}>
                <Label>First Name</Label>
                <Input
                  style={styles.input}
                  value={firstName}
                  onChangeText={value => this.onChange('firstName', value)}
                />
              </Item>
              {errorData?.firstName && (
                <Text style={styles.error}>{errorData?.firstName[0]}</Text>
              )}

              <Item floatingLabel error={errorData?.lastName != null}>
                <Label>Last Name</Label>
                <Input
                  style={styles.input}
                  value={lastName}
                  onChangeText={value => this.onChange('lastName', value)}
                />
              </Item>
              {errorData?.lastName && (
                <Text style={styles.error}>{errorData?.lastName[0]}</Text>
              )}
              <Item floatingLabel error={errorData?.age != null}>
                <Label>Age</Label>
                <Input
                  style={styles.input}
                  value={age.toString()}
                  keyboardType="numeric"
                  onChangeText={value => this.onChange('age', value)}
                />
              </Item>
              {errorData?.age && (
                <Text style={styles.error}>{errorData?.age[0]}</Text>
              )}
              <Button
                style={styles.button}
                full
                onPress={this.onSubmit}
                disabled={loading}>
                <Text>Save</Text>
              </Button>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  saveData: state.savedContact.data,
  saveError: state.savedContact.error,
  data: state.contactById.data,
  loading: state.contactById.loading || state.savedContact.loading,
  error: state.contactById.error,
});

const mapDispatchToProps = {
  save,
  findById,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactScreen);
