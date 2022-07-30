import LayoutDefault from 'src/components/layout/default';
import { lazy } from 'react';
import { ROUTING_CONFIG } from './constants';
import { TConfigRouter } from 'src/types';

export const PUBLIC_ROUTES: TConfigRouter[] = [
  {
    path: ROUTING_CONFIG.HOME,
    component: lazy(() => import('../pages/SearchPage')),
    layout: LayoutDefault,
    exact: true,
  },
];

export const PRIVATE_ROUTES: TConfigRouter[] = [];
