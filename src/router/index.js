import Vue from 'vue'
import Router from 'vue-router'
import Overtune from '@/components/Overtune'
import SingleGallery from '@/components/SingleGallery'
import SinglePhoto from '@/components/SinglePhoto'
import Apply from '@/components/Apply'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      alias: ['/nlm', '/18x'],
      name: 'Overtune',
      component: Overtune
    },
    {
      path: '/Apply',
      name: 'Apply',
      component: Apply
    },
    {
      path: '/gallery/:galleryId',
      name: 'SingleGallery',
      component: SingleGallery
    },
    {
      path: '/gallery/:galleryId/photo/:photoId',
      name: 'SinglePhoto',
      component: SinglePhoto
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
