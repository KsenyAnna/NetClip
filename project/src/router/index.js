import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'
import DetailView from '../views/DetailView.vue'
import ProfileView from '../views/ProfileView.vue'
import ArticlesAndVideosView from '../views/ArticlesAndVideosView.vue'
import ReviewsView from '../views/ReviewsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/detail',
    name: 'detail',
    component: DetailView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/',
    name: 'main',
    component: MainView
  },  
  {
    path: '/articles',
    name: 'articles',
    component: ArticlesAndVideosView
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: ReviewsView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
