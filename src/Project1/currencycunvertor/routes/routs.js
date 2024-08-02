import { lazy } from 'react';

export const PublicRoutes = [
  {
    slug: '/',
    component: lazy(() => import('../index')),
    exact: true,
  }
]