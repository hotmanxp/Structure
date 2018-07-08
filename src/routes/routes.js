import PATH from './path'

export default [
  {
    page: () => import('Pages/home'),
    name: 'Home',
    path: PATH.HOME
  },
  {
    page: () => import('Pages/about'),
    name: 'About',
    path: PATH.ABOUT 
  },
  {
    page: () => import('Pages/detail'),
    name: 'detail',
    path: PATH.PRODUCT_DETAIL
  }
]