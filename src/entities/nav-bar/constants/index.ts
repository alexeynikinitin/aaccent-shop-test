import { INavItem } from 'entities/nav-bar/api/types';

export const navItems: INavItem[] = [
  { id: 0, path: '/', title: 'Каталог' },
  { id: 1, path: '/delivery', title: 'Доставка и оплата' },
  { id: 2, path: '/guaranty', title: 'Гарантии' },
  { id: 3, path: '/contacts', title: 'Контакты' },
  { id: 4, path: '/stock', title: 'Акции' },
  { id: 5, path: '/new', title: 'Новинки' },
  { id: 6, path: '/reviews', title: 'Отзывы' },
];
