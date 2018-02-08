import Vue from 'vue'
import Router from 'vue-router'
import Overtune from '@/components/Overtune'
import SingleGallery from '@/components/SingleGallery'
import Boncka from '@/components/Boncka'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            alias: '/nlm',
            name: 'Overtune',
            component: Overtune
        },
        {
            path: '/Apply',
            name: 'Boncka',
            component: Boncka
        },
        {
            path: '/gallery/:galleryId',
            name: 'SingleGallery',
            component: SingleGallery
        }
    ]
})