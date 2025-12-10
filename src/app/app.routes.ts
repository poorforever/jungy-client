import {Routes} from '@angular/router';
import {Home} from './components/home/home';
import {News} from './components/news/news';
import {Contact} from './components/contact/contact';
import {About} from './components/about/about';

export const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'home',
          component: Home,
          title: 'Home'
        },
        {
          path: 'news',
          component: News,
          title: 'News'
        },
        {
          path: 'contact',
          component: Contact,
          title: 'Contact'
        },
        {
          path: 'about',
          component: About,
          title: 'About'
        }
      ]
    }
  ];
