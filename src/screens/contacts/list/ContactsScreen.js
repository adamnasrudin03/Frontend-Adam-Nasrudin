import React, {Component} from 'react';
import {
  Body,
  Button,
  Container,
  Left,
  ListItem,
  Icon,
  Item,
  Fab,
  Right,
  Text,
  View,
  Input,
  Thumbnail,
} from 'native-base';

import {CommonHeader} from '../../../components/CommonHeader';
import styles from './styles';
import {Alert, RefreshControl} from 'react-native';
import {connect} from 'react-redux';
import {showError} from '../../../utils/toast';
import {deleteById, findAllContacts} from '../../../action/contact';
import {SwipeListView} from 'react-native-swipe-list-view';

function RowUnit({onPress, unit}) {
  const Image = () => {
    if (unit.photo === 'N/A') {
      return (
        <Thumbnail
          source={{
            uri:
              'https://www1.nyc.gov/assets/nycha/images/content/pages/contact-in-person.png',
          }}
        />
      );
    } else {
      return <Thumbnail source={{uri: unit.photo}} />;
    }
  };
  return (
    <ListItem thumbnail style={styles.unit} onPress={() => onPress(unit)}>
      <Left>
        <Image />
      </Left>
      <Body>
        <Text>{unit.firstName + ' ' + unit.lastName}</Text>
      </Body>
      <Right>
        <Icon active name="arrow-right-circle" type="Feather" />
      </Right>
    </ListItem>
  );
}

class ContactsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
    };
  }

  componentDidMount() {
    this.reload(this.state.params);
  }

  componentDidUpdate(prevProps, prevState) {
    const {data, saveData, error, deletedData, deletedError} = this.props;

    if (prevProps.data !== data) {
      this.setState({
        data: [...this.state.data, ...data],
      });
    } else if (
      prevProps.saveData !== saveData ||
      prevProps.deletedData !== deletedData
    ) {
      this.onRefresh();
    } else if (error && prevProps.error !== error) {
      showError(error);
    } else if (deletedError && prevProps.deletedError !== deletedError) {
      showError(deletedError);
    }
  }

  reload() {
    this.props.findAllContacts();
  }

  onRefresh = () => {
    this.reload();
  };

  onDelete = unit => {
    Alert.alert('Confirmation', 'Delete this Contact ?', [
      {text: 'Cancel', style: 'cancel'},
      {text: 'OK', onPress: () => this.props.deleteById(unit.id)},
    ]);
  };

  onShowForm = unit => {
    this.props.navigation.navigate('Contact', unit ? {id: unit.id} : null);
  };

  onEndReached = () => {
    const {data, total, params} = this.state;
    if (data.length < total) {
      this.reload({
        ...params,
        page: params.page + 1,
      });
    }
  };

  render() {
    const {navigation, loading} = this.props;
    const {data} = this.state;

    return (
      <Container>
        <CommonHeader navigation={navigation} title="Contacts" />
        <View style={styles.content}>
          <SwipeListView
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={this.onRefresh} />
            }
            data={data}
            renderItem={({item: unit}) => (
              <RowUnit onPress={this.onShowForm} unit={unit} />
            )}
            renderHiddenItem={data => (
              <View style={styles.hiddenUnit}>
                <Button transparent onPress={() => this.onDelete(data.item)}>
                  <Icon
                    name="delete"
                    type="AntDesign"
                    style={styles.iconDelete}
                  />
                </Button>
              </View>
            )}
            leftOpenValue={75}
            keyExtractor={unit => unit.id.toString()}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={0.5}
          />

          <Fab style={styles.fab} onPress={this.onShowForm}>
            <Icon name="add" />
          </Fab>
        </View>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  saveData: state.savedContact.data,
  deletedData: state.deletedContactById.data,
  deletedError: state.deletedContactById.error,
  data: state.contacts.data,
  loading: state.contacts.loading || state.deletedContactById.loading,
  error: state.contacts.error,
});

const mapDispatchToProps = {
  deleteById,
  findAllContacts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactsScreen);
