import Vue from 'vue'
import Router from 'vue-router'
import Overtune from '@/components/Overtune'
import PreludeGallery from '@/components/PreludeGallery'
import ApplyForm from '@/components/ApplyForm'
import Copyright from '@/components/Copyright'

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
            name: 'ApplyForm',
            component: ApplyForm
        },
        {
            path: '/gallery/:galleryId',
            name: 'PreludeGallery',
            component: PreludeGallery
        },
        {
            path: '/copyright',
            name: 'Copyright',
            component: Copyright
        },
    ]
})