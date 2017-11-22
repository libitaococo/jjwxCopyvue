import Vue from 'vue'
import Router from 'vue-router'
import Bookshelf from '../components/bookshelf/Bookshelf.vue'
import Bookstore from '../components/bookstore/Bookstore.vue'
import Forum from '../components/forum/Forum.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Bookshelf', component: Bookshelf},
    {path: '/bookstore', name: 'Bookstore', component: Bookstore},
    {path: '/forum', name: 'Forum', component: Forum}
  ]
})
