import { lazy } from 'react';
import { ROUTING_CONFIG } from './constants';
import { TConfigRouter } from 'src/types';
import {
  MainLayout,
  FavoriteLayout,
  UserDetailLayout,
} from 'src/components/layout';

export const PUBLIC_ROUTES: TConfigRouter[] = [
  {
    path: ROUTING_CONFIG.HOME,
    component: lazy(() => import('../pages/searchPage')),
    layout: MainLayout,
    exact: true,
  },
  {
    path: ROUTING_CONFIG.USER_DETAIL,
    component: lazy(() => import('../pages/userDetail')),
    layout: UserDetailLayout,
    exact: true,
  },
  {
    path: ROUTING_CONFIG.LIKED,
    component: lazy(() => import('../pages/favorites')),
    layout: FavoriteLayout,
    exact: true,
  },
];

export const PRIVATE_ROUTES: TConfigRouter[] = [];

export const ROUTES: TConfigRouter[] = PUBLIC_ROUTES.concat(PRIVATE_ROUTES);
