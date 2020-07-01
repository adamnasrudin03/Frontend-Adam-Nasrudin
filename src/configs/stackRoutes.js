import {ContactScreen} from '../screens/contacts';
import {Splash} from '../screens';
import {MainScreen} from '../screens/main';

export const stackRoutes = [
  {
    name: 'Splash',
    component: Splash,
  },
  {
    name: 'Main',
    component: MainScreen,
  },
  {
    name: 'Contact',
    component: ContactScreen,
  },
];

export default stackRoutes;
