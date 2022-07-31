import { lazy } from 'react';
import { ROUTING_CONFIG } from './constants';
import { TConfigRouter } from 'src/Types';
import {
  MainLayout,
  FavoriteLayout,
  UserDetailLayout,
} from 'src/Components/Layout';

export const PUBLIC_ROUTES: TConfigRouter[] = [
  {
    path: ROUTING_CONFIG.HOME,
    component: lazy(() => import('../Pages/SearchPage')),
    layout: MainLayout,
    exact: true,
  },
  {
    path: ROUTING_CONFIG.USER_DETAIL,
    component: lazy(() => import('../Pages/UserDetail')),
    layout: UserDetailLayout,
    exact: true,
  },
  {
    path: ROUTING_CONFIG.LIKED,
    component: lazy(() => import('../Pages/Favorites')),
    layout: FavoriteLayout,
    exact: true,
  },
];

export const PRIVATE_ROUTES: TConfigRouter[] = [];

export const ROUTES: TConfigRouter[] = PUBLIC_ROUTES.concat(PRIVATE_ROUTES);
