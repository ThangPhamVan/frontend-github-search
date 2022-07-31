import MainLayout from 'src/components/layout/Main';
import { lazy } from 'react';
import { ROUTING_CONFIG } from './constants';
import { TConfigRouter } from 'src/types';

export const PUBLIC_ROUTES: TConfigRouter[] = [
  {
    path: ROUTING_CONFIG.HOME,
    component: lazy(() => import('../pages/SearchPage')),
    layout: MainLayout,
    exact: true,
  },
];

export const PRIVATE_ROUTES: TConfigRouter[] = [];
