import { Router } from '@vaadin/router';

import './view/pages/dashboard-page';
import './view/pages/form-page';

// import.meta.env.BASE_URL is a globle variable defined in `vite.config.js`.
const BASE = import.meta.env.BASE_URL ?? '/';

const output = document.querySelector('main');
const router = new Router(output);
router.setRoutes([
  { path: `${BASE}`, component: 'dashboard-page' },
  { path: `${BASE}form`, component: 'form-page' },
]);
