import Vue from 'vue'
import Router from 'vue-router'
import Overtune from '@/components/Overtune'
import PreludeGallery from '@/components/PreludeGallery'

const ApplyForm = () =>
    import ('@/components/ApplyForm')

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Overtune',
            component: Overtune
        },
        {
            path: '/apply',
            name: 'ApplyForm',
            component: ApplyForm
        },
        {
            path: '/gallery/:galleryId',
            name: 'PreludeGallery',
            component: PreludeGallery
        }
    ]
})