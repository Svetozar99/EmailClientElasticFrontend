import { createRouter, createWebHistory} from 'vue-router'
import AllUsers from '../components/userComponent/AllUsers.vue'
import AllMyContact from '../components/conctact/AllMyContact.vue'
import MyMessage from '../components/message/MyMessage.vue'
import LogIn from '../components/login/LogIn.vue'
import LogOut from '../components/logout/LogOut.vue'
import Register from '../components/userComponent/Register.vue'
import Indexing from '../components/elastic/Indexing.vue'
import MessagesSearch from '../components/elastic/messages/MessagesSearch.vue'
import ContactsSearch from '../components/elastic/contact/ContactsSearch.vue'

const router = new createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'Home',
            path: '/',
            component: AllUsers
        },
        {
            name: 'AllMyContact',
            path: '/my-contacts',
            component: AllMyContact
        },
        {
            name: 'MyMessage',
            path: '/my-messages',
            component: MyMessage
        },
        {
            name: 'LogIn',
            path: '/login',
            component: LogIn
        },
        {
            path: '/logout',
            component: LogOut
        },
        {
            name: 'Register',
            path: '/register',
            component: Register
        },
        {
            name: 'Indexing',
            path: '/indexing',
            component: Indexing
        },
        {
            name: 'MessagesSearch',
            path: '/messages-search',
            component: MessagesSearch
        },
        {
            name: 'ContactsSearch',
            path: '/contacts-search',
            component: ContactsSearch
        },
    ]
})

router.beforeEach((to,from, next) => {
    const token = localStorage.getItem('token')

    if (to.name === 'Register' && !token) next();
    else if(to.name !== 'LogIn' && !token) next({ name: 'LogIn'});
    else if((to.name === 'LogIn' || to.name === 'Register') && token) next ({name: 'Home'})
    else next();
})

export default router;