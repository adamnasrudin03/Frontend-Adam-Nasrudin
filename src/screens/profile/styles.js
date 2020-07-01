import {StyleSheet} from 'react-native';
import {colors} from '../../utils';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    padding: 40,
    paddingTop: 0,
    // justifyContent: 'space-between',
    flex: 1,
  },
  text: {
    marginTop: 40,

    marginBottom: 40,
  },
  button: {
    marginTop: 40,
    backgroundColor: colors.tertiary,
  },
  container: {justifyContent: 'center', alignItems: 'center'},
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  borderProfile: {
    marginTop: 20,
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
