import { ROUTING_CONFIG } from 'src/Routers/constants';
import React from 'react';

export type TConfigRouter = {
  path: ROUTING_CONFIG;
  exact: boolean;
  layout: React.FC<{ children: React.ReactNode }>;
  component: React.FC;
};
