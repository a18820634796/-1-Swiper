import Vue from 'vue'
import Router from 'vue-router'
// import pageRouter from './pageRouter'
// import shop from './shop'
// import category from './category'

import category from '@/Home/Category/Index'
import page from '@/Home/Page/Index'
import shop from '@/Home/Shop/Index'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: 'page' },
    // ...pageRouter,
    // ...shop,
    // ...category,
    {
      path: '/page',
      name: 'page',
      component: page,
      children: [
        {
          path: 'pageTwo',
          name: 'pageTwo',
          component: () => import('@/Home/page/two')
        }
      ]
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/category',
      name: 'category',
      component: category
    }
  ]
})
