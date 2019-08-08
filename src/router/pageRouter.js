
import page from '@/Home/Page/Index'
export default([
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
  }
])
