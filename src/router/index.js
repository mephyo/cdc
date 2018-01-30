import Vue from 'vue'
import Router from 'vue-router'
import Overtune from '@/components/Overtune'
import SingleGallery from '@/components/SingleGallery'
import SinglePhoto from '@/components/SinglePhoto'
import Agent from '@/components/Agent'
import Boncka from '@/components/Boncka'
import Admin from '@/components/Admin'

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
      name: 'Boncka',
      component: Boncka
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin
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
