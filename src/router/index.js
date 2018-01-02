import Vue from 'vue'
import Router from 'vue-router'
import Overtune from '@/components/Overtune'
import SingleGallery from '@/components/SingleGallery'
import SinglePhoto from '@/components/SinglePhoto'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      alias: '/nlm',
      name: 'Overtune',
      component: Overtune
    },
    {
      path: '/:galleryId',
      name: 'SingleGallery',
      component: SingleGallery
    },
    {
      path: '/:galleryId/:photoId',
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
