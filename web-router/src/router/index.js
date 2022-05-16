import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InstanceView from '../views/InstanceView.vue'
import UserView from '../views/UserView.vue'
import TeamView from '../views/TeamView.vue'
import MemberView from '../views/MemberView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/instance',
    name: 'Instance',
    component: InstanceView
  },
  {
    path: '/user',
    name: 'User',
    component: UserView
  },
  {
    path: '/team',
    name: 'Team',
    component: TeamView,
    props: true
  },

  //redirect

  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  //catchAll 404
  {
    path: '/member',
    name: 'Member',
    component: MemberView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
