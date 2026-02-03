import { authRoutes } from './authRoutes';
import { appRoutes } from './appRoutes';

export const allRoutes = [
  ...authRoutes,
  ...appRoutes,
];

export { authRoutes, appRoutes };

