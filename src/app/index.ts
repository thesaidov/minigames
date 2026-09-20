import '../styles/globals.scss';

import { Router } from './router';
import { renderHomePage } from '../pages/home/home-page';
import { renderLibraryPage } from '../pages/library/library-page';

const app: HTMLDivElement = document.createElement('div');

app.id = 'app';

document.body.append(app);

const router: Router = new Router([
  {
    path: '/',
    render: (): void => renderHomePage(app),
  },
  {
    path: '/library',
    render: (): void => renderLibraryPage(app),
  },
]);

router.handleRoute();
