import React from 'react';

export type TConfigRouter = {
  path: string;
  exact: boolean;
  layout: React.FC<{ children: React.ReactNode }>;
  component: React.FC;
};
