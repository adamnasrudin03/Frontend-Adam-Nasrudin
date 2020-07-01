import {StyleSheet} from 'react-native';
import {colors} from '../../../utils';

const styles = StyleSheet.create({
  content: {
    padding: 5,
  },
  input: {
    marginBottom: 5,
  },
  error: {
    color: colors.error,
    paddingHorizontal: 5,
  },
  button: {
    backgroundColor: colors.tertiary,
    marginTop: 20,
    borderRadius: 25,
  },
  container: {justifyContent: 'center', alignItems: 'center'},

  borderProfile: {
    marginTop: 20,
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
