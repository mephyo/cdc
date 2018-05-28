import Vue from 'vue'
import Router from 'vue-router'
import Overtune from '@/components/Overtune'
import PreludeGallery from '@/components/PreludeGallery'
import ApplyForm from '@/components/ApplyForm'
import Copyright from '@/components/Copyright'
import Settings from '@/components/Settings'
import Contracts from '@/components/Contracts'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            alias: '/nlm',
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
        },
        {
            path: '/copyright',
            name: 'Copyright',
            component: Copyright
        },
        {
            path: '/settings',
            name: 'Settings',
            component: Settings
        },
        {
            path: '/contracts',
            name: 'Contracts',
            component: Contracts
        }
    ]
})