import { createRouter, createWebHistory} from 'vue-router'
import AllUsers from '../components/userComponent/AllUsers.vue'
import AllMyContact from '../components/conctact/AllMyContact.vue'

const router = new createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'AllUsers',
            path: '/',
            component: AllUsers
        },
        {
            name: 'AllMyContact',
            path: '/my-contacts',
            component: AllMyContact
        }
    ]
})

export default router;