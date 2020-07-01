import {StyleSheet} from 'react-native';
import {colors} from '../../../utils';

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  unit: {
    backgroundColor: colors.white,
  },
  hiddenUnit: {
    padding: 10,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  iconDelete: {
    fontSize: 20,
    color: 'red',
  },
  fab: {
    backgroundColor: colors.tertiary,
  },
  avatar: {
    width: 10,
    height: 10,
    fontSize: 10,
  },
});
export default styles;
