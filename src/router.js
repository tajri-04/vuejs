import Router from 'vue-router';
import Vue from 'vue';
import Login from './cours3/views/Login.vue'
import Signup from './cours3/views/Signup.vue'
import Home from './cours3/views/Home.vue'
Vue.use(Router);

const router = new Router({
    routes :[
        {path : "/login",component : Login},
        {path : "/signup",component : Signup},
        {path : "/home",component : Home},
    ]
})

export default router;