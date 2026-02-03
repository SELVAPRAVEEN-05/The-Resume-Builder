import Login from '../screens/loginScreen';
import GetStarted from '../screens/getStartedScreen';
import Register from '../screens/registerScreen';

export const authRoutes = [
    {
    name: 'GetStarted' as const,
    component: GetStarted,
  },        
  {
    name: 'Login' as const,
    component: Login,
  },
  {
    name: 'Register' as const,
    component: Register,
  },

];
